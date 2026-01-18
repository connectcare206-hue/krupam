
import React, { useState, useRef } from 'react';
import { GoogleGenAI, Modality, LiveServerMessage, Blob } from '@google/genai';
import { encode, decode, decodeAudioData } from '../utils/audioUtils';

const SYSTEM_INSTRUCTION = `
Act as an Elite Australian Recruitment Consultant for Connectcare Services. 
Your tone is professional, confident, friendly, and you have a clear Australian accent.

KEY INFO:
- We provide contractual staffing for Pharma, IT, AI, Solar, Real Estate, and Support.
- Markets: USA, UK, Canada, and Australia.
- Cost Advantage: We charge $4–5/hour. Clients save 40-70%.
- Model: We are a recruitment partner, NOT an outsourcing firm. The client has 100% control over selection.

GOALS:
- Explain cost benefits.
- Answer queries about hiring process.
- Guide users to schedule an interview.

Respond with typical Aussie flair (G'day, cheers, no worries) but keep it high-level corporate.
`;

export const VoiceAgent: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const audioContextInRef = useRef<AudioContext | null>(null);
  const audioContextOutRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const sessionRef = useRef<any>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);

  const stopSession = () => {
    if (sessionRef.current) {
      try { sessionRef.current.close(); } catch(e) {}
      sessionRef.current = null;
    }
    if (scriptProcessorRef.current) {
      scriptProcessorRef.current.disconnect();
      scriptProcessorRef.current = null;
    }
    sourcesRef.current.forEach(source => {
      try { source.stop(); } catch (e) {}
    });
    sourcesRef.current.clear();
    
    if (audioContextInRef.current) {
      audioContextInRef.current.close().catch(() => {});
      audioContextInRef.current = null;
    }
    if (audioContextOutRef.current) {
      audioContextOutRef.current.close().catch(() => {});
      audioContextOutRef.current = null;
    }
    
    setIsActive(false);
    setIsConnecting(false);
    setIsSpeaking(false);
  };

  const startSession = async () => {
    if (isConnecting || isActive) return;
    setIsConnecting(true);
    
    try {
      // 1. Check for API key early
      if (!process.env.API_KEY) {
        throw new Error("API Key is missing. Please set it in Netlify/Environment variables.");
      }

      // 2. ONLY NOW request microphone - this ensures the browser prompt only appears on click
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Initialize Contexts
      audioContextInRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      audioContextOutRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      await audioContextInRef.current.resume();
      await audioContextOutRef.current.resume();

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            setIsConnecting(false);
            setIsActive(true);
            
            const source = audioContextInRef.current!.createMediaStreamSource(stream);
            const scriptProcessor = audioContextInRef.current!.createScriptProcessor(4096, 1, 1);
            scriptProcessorRef.current = scriptProcessor;

            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBlob: Blob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              
              sessionPromise.then(session => {
                if (session && typeof session.sendRealtimeInput === 'function') {
                  session.sendRealtimeInput({ media: pcmBlob });
                }
              });
            };

            source.connect(scriptProcessor);
            scriptProcessor.connect(audioContextInRef.current!.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (base64Audio) {
              setIsSpeaking(true);
              const ctx = audioContextOutRef.current!;
              
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
              
              const audioBuffer = await decodeAudioData(decode(base64Audio), ctx, 24000, 1);
              const source = ctx.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(ctx.destination);
              
              source.addEventListener('ended', () => {
                sourcesRef.current.delete(source);
                if (sourcesRef.current.size === 0) setIsSpeaking(false);
              });

              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
            }

            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => { try { s.stop(); } catch(e) {} });
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
              setIsSpeaking(false);
            }
          },
          onerror: (e) => {
            console.error('Live API Error:', e);
            stopSession();
          },
          onclose: () => {
            stopSession();
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Puck' } },
          },
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      sessionRef.current = await sessionPromise;
    } catch (err: any) {
      console.error('Failed to start session:', err);
      alert(err.message || "Could not start voice agent. Please ensure microphone access is allowed.");
      setIsConnecting(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      {isActive && (
        <div className="bg-slate-900 border border-white/10 p-6 rounded-[2.5rem] shadow-2xl w-80 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">AU Recruiter Active</span>
            </div>
            <button onClick={stopSession} className="text-slate-500 hover:text-white transition-colors p-1">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="flex flex-col items-center gap-6 text-center">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 relative ${isSpeaking ? 'bg-blue-600/20 scale-105' : 'bg-slate-800'}`}>
              {isSpeaking && (
                <div className="absolute inset-0 rounded-full animate-ping bg-blue-600/20"></div>
              )}
              <div className="flex gap-1.5 items-end h-8">
                {[1, 2, 3, 4, 5].map(i => (
                  <div 
                    key={i} 
                    className={`w-1.5 bg-blue-500 rounded-full transition-all duration-300 ${isSpeaking ? 'animate-bounce h-full' : 'h-2 opacity-30'}`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-extrabold text-white mb-2">
                {isSpeaking ? "G'day! I'm speaking..." : "I'm listening, mate..."}
              </p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                Ask about pricing, industries, <br />or hiring processes.
              </p>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={isActive ? stopSession : startSession}
        disabled={isConnecting}
        aria-label={isActive ? "End call" : "Start call with AU Recruiter"}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 active:scale-90 group relative ${isActive ? 'bg-red-500 hover:bg-red-600 rotate-[135deg]' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {isConnecting ? (
          <i className="fas fa-circle-notch fa-spin text-white text-xl"></i>
        ) : (
          <i className="fas fa-headset text-white text-2xl"></i>
        )}
        
        {!isActive && !isConnecting && (
          <span className="absolute right-full mr-6 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none border border-white/10 shadow-2xl">
            Talk to AU Recruiter
          </span>
        )}
      </button>
    </div>
  );
};
