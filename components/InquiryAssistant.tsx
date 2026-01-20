
import React, { useState } from 'react';
import { InquiryType } from '../types';
import { classifyInquiryIntent } from '../services/geminiService';

export const InquiryAssistant: React.FC<{ externalTypeTrigger?: InquiryType | null }> = ({ externalTypeTrigger }) => {
  const [step, setStep] = useState<'INITIAL' | 'COLLECT' | 'SUCCESS'>('INITIAL');
  const [type, setType] = useState<InquiryType | null>(externalTypeTrigger || null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [reasoning, setReasoning] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInitial = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const msg = (e.target as any).message.value;
    const res = await classifyInquiryIntent(msg);
    setType(res.intent);
    setConfidence(res.confidence);
    setReasoning(res.reasoning);
    setStep('COLLECT');
    setLoading(false);
  };

  if (step === 'SUCCESS') return (
    <div className="bg-white rounded-[4rem] p-16 text-center text-slate-900 border border-slate-100 shadow-2xl animate-in zoom-in duration-500">
      <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
        <i className="fas fa-check text-4xl"></i>
      </div>
      <h4 className="text-4xl font-black mb-4 tracking-tight">Request Queued.</h4>
      <p className="text-slate-500 font-bold">A regional head will contact you within 4 hours to discuss your {type} inquiry.</p>
    </div>
  );

  return (
    <div className="bg-white rounded-[4rem] p-12 text-slate-900 border border-slate-100 min-h-[550px] flex flex-col justify-center shadow-2xl relative overflow-hidden">
      {/* Decorative backdrop element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] -z-10"></div>
      
      {step === 'INITIAL' ? (
        <form onSubmit={handleInitial} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div>
            <h4 className="text-3xl font-black tracking-tight mb-2">Quantum Intake Hub</h4>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Powered by Connectcare AI Nexus</p>
          </div>
          <textarea 
            name="message" 
            required 
            placeholder="Describe your staffing needs or career goals..." 
            className="w-full bg-slate-50 rounded-3xl p-8 min-h-[220px] font-bold outline-none ring-2 ring-transparent focus:ring-slate-900 transition-all text-slate-800 placeholder:text-slate-300 border border-transparent focus:bg-white"
          ></textarea>
          <button 
            disabled={loading} 
            className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-3"
          >
            {loading ? <i className="fas fa-atom fa-spin"></i> : <><i className="fas fa-microchip"></i> Analyze Intent & Proceed</>}
          </button>
        </form>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setStep('SUCCESS'); }} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="flex items-center justify-between border-b border-slate-100 pb-6">
            <h4 className="text-3xl font-black tracking-tight">{type} Portal</h4>
            <button type="button" onClick={() => setStep('INITIAL')} className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900 transition-colors">Change Intent</button>
          </div>

          {/* AI Insights Component for Trust Building */}
          <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px]">
                  <i className="fas fa-robot"></i>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">AI Intelligence Match</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-slate-400 uppercase">Confidence:</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black">
                  {(confidence ? confidence * 100 : 0).toFixed(0)}%
                </span>
              </div>
            </div>
            {reasoning && (
              <p className="text-[11px] font-bold text-slate-600 leading-relaxed italic">
                "{reasoning}"
              </p>
            )}
          </div>

          <div className="space-y-4">
            <div className="relative">
              <i className="fas fa-user absolute left-6 top-1/2 -translate-y-1/2 text-slate-300"></i>
              <input type="text" required placeholder="Full Name" className="w-full bg-slate-50 pl-14 pr-6 py-6 rounded-2xl font-bold outline-none focus:bg-white focus:ring-2 focus:ring-slate-100 transition-all"/>
            </div>
            <div className="relative">
              <i className="fas fa-envelope absolute left-6 top-1/2 -translate-y-1/2 text-slate-300"></i>
              <input type="text" required placeholder="Contact (WhatsApp or Email)" className="w-full bg-slate-50 pl-14 pr-6 py-6 rounded-2xl font-bold outline-none focus:bg-white focus:ring-2 focus:ring-slate-100 transition-all"/>
            </div>
          </div>

          <button className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-black transition-all active:scale-95 group">
            Secure Nexus Connection <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
          </button>
        </form>
      )}
    </div>
  );
};
