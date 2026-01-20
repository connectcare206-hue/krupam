
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { AICostCalculator } from './components/AICostCalculator';
import { VoiceAgent } from './components/VoiceAgent';
import { InquiryAssistant } from './components/InquiryAssistant';
import { PROCESS_STEPS } from './constants';
import { InquiryType } from './types';
import { ServicesPage } from './ServicesPage';

const LogoIcon = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="medallionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#64FFDA" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path d="M25 50C25 36.1929 36.1929 25 50 25C63.8071 25 75 36.1929 75 50C75 63.8071 63.8071 75 50 75" stroke="url(#medallionGrad)" strokeWidth="6" strokeLinecap="round"/>
    <path d="M35 50C35 41.7157 41.7157 35 50 35C58.2843 35 65 41.7157 65 50" stroke="white" strokeOpacity="0.4" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="5" fill="#64FFDA">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'services'>('home');
  const [activeInquiryTrigger, setActiveInquiryTrigger] = useState<{ type: InquiryType, key: number } | null>(null);

  const handleHeroAction = (type: InquiryType) => {
    setActiveInquiryTrigger({ type, key: Date.now() });
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigate = (target: 'home' | 'services') => {
    setView(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout onActionTrigger={handleHeroAction} onNavigate={handleNavigate}>
      {view === 'home' ? (
        <>
          <section className="relative min-h-screen pt-40 pb-20 flex items-center overflow-visible">
            <div className="container mx-auto px-6 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                <div className="lg:w-3/5 text-center lg:text-left flex flex-col">
                  <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#64FFDA]/5 border border-[#64FFDA]/10 text-[#64FFDA] rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-10 w-fit self-center lg:self-start">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-[#64FFDA] animate-pulse"></span>
                    Connectcare: We make your company a brand
                  </div>
                  
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white mb-10 leading-[0.9] tracking-tighter">
                    Sourcing <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] via-cyan-400 to-blue-500">Global Elite.</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-slate-300 mb-14 max-w-2xl leading-relaxed font-medium">
                    Empowering your vision to build a global powerhouse. We source specialized talent from India to scale firms in <span className="text-white font-bold border-b-2 border-[#64FFDA]/30 pb-1">USA, UK, Canada & AU.</span>
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start mb-24">
                    <button 
                      onClick={() => handleHeroAction('Employer')}
                      className="bg-[#64FFDA] text-[#020617] px-16 py-7 rounded-3xl font-black text-[13px] uppercase tracking-[0.2em] shadow-2xl hover:shadow-[0_0_50px_rgba(100,255,218,0.5)] transition-all hover:-translate-y-1.5 active:scale-95"
                    >
                      Hire Talent Now
                    </button>
                    <button 
                      onClick={() => handleNavigate('services')}
                      className="border border-white/20 text-white px-16 py-7 rounded-3xl font-black text-[13px] uppercase tracking-[0.2em] hover:border-[#64FFDA] hover:text-[#64FFDA] transition-all bg-white/5 backdrop-blur-md"
                    >
                      Explore Hubs
                    </button>
                  </div>

                  <div className="flex flex-col gap-6 items-center lg:items-start opacity-70 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-3 px-10 py-4 bg-[#64FFDA]/5 border border-[#64FFDA]/20 rounded-[1.5rem] backdrop-blur-xl group hover:border-[#64FFDA] transition-all w-fit">
                       <i className="fas fa-certificate text-[#64FFDA] text-lg group-hover:rotate-12 transition-transform"></i>
                       <span className="text-[10px] font-black uppercase tracking-widest text-[#64FFDA]">ISO 9001:2015 CERTIFIED GLOBAL HUB</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/5 flex justify-center perspective-1000">
                  <div className="globe-container">
                     <div className="globe">
                        <LogoIcon className="w-[60%] h-[60%]" />
                     </div>
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[110%] h-[110%] border border-[#64FFDA]/5 rounded-full animate-ping opacity-10"></div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-32 relative">
            <div className="container mx-auto px-6 text-center mb-32">
              <h2 className="text-[#64FFDA] text-[11px] font-black uppercase tracking-[0.7em] mb-8">Service Portfolios</h2>
              <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter">Scale Your Brand.</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
                {[
                  {title: 'IT & AI Staffing', icon: 'fa-microchip', desc: 'Elite engineers and AI researchers to build your tech brand.'},
                  {title: 'Bookkeeping Hub', icon: 'fa-calculator', desc: 'Offshore CPAs reducing accounting overheads by over 50%.'},
                  {title: '24/7 CX Excellence', icon: 'fa-headset', desc: 'High-proficiency voice and support teams for western markets.'}
                ].map((s, i) => (
                  <div key={i} className="glass-card p-14 rounded-[4rem] text-left group hover:border-[#64FFDA]/40 transition-all">
                    <div className="w-16 h-16 bg-[#64FFDA]/5 border border-[#64FFDA]/10 rounded-2xl flex items-center justify-center text-[#64FFDA] text-3xl mb-10 group-hover:scale-110 transition-transform">
                      <i className={`fas ${s.icon}`}></i>
                    </div>
                    <h4 className="text-3xl font-black text-white mb-6 tracking-tight uppercase">{s.title}</h4>
                    <p className="text-slate-400 font-bold mb-10 leading-relaxed">{s.desc}</p>
                    <button onClick={() => handleNavigate('services')} className="text-[#64FFDA] font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-3">
                      Learn More <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <AICostCalculator onSavingsClaimed={() => handleHeroAction('Employer')} />
          
          <section id="process" className="py-40 relative">
            <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row gap-40 items-start">
                <div className="lg:w-1/3 lg:sticky lg:top-48">
                  <h2 className="text-[#64FFDA] text-[11px] font-black uppercase tracking-[0.7em] mb-10">Operational Model</h2>
                  <h3 className="text-6xl md:text-7xl font-black text-white leading-[1] mb-12 tracking-tighter">Velocity <br />Hiring.</h3>
                  <p className="text-xl text-slate-400 font-medium mb-16 leading-relaxed">We optimize the sourcing friction, delivering deployment-ready talent in under 48 hours.</p>
                  
                  <div className="p-12 border border-white/5 rounded-[4rem] bg-white/5 backdrop-blur-2xl shadow-2xl">
                     <div className="text-6xl font-black text-[#64FFDA] mb-3 tracking-tighter">50% ROI</div>
                     <p className="text-[11px] font-black uppercase tracking-widest text-slate-500">Margin Retention Advantage</p>
                  </div>
                </div>

                <div className="lg:w-2/3 relative">
                  <div className="absolute left-[31px] top-10 bottom-10 w-px bg-gradient-to-b from-[#64FFDA]/40 via-white/5 to-transparent hidden sm:block"></div>
                  <div className="space-y-24">
                    {PROCESS_STEPS.map((step, idx) => (
                      <div key={idx} className="relative pl-0 sm:pl-32 group">
                        <div className="absolute left-0 top-0 w-20 h-20 rounded-[1.5rem] bg-[#0A192F] border border-[#64FFDA]/20 flex items-center justify-center text-[#64FFDA] text-3xl z-10 hidden sm:flex transition-all group-hover:border-[#64FFDA] group-hover:shadow-[0_0_40px_rgba(100,255,218,0.3)]">
                          <i className={`fas ${step.icon}`}></i>
                        </div>
                        <div className="glass-card p-14 rounded-[4rem] group-hover:translate-x-6 transition-transform">
                           <span className="text-[11px] font-black text-[#64FFDA] uppercase tracking-[0.5em] mb-6 block opacity-80">PHASE {step.number}</span>
                           <h4 className="text-4xl font-black text-white mb-8 tracking-tight leading-none uppercase">{step.title}</h4>
                           <p className="text-slate-400 text-lg leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <ServicesPage onAction={handleHeroAction} />
      )}

      <VoiceAgent />

      <section id="contact" className="py-40 relative">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-40">
          <div className="flex-1">
            <h3 className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter">Scale Your <br /><span className="text-[#64FFDA]">Nexus Team.</span></h3>
            <p className="text-2xl text-slate-400 mb-20 leading-relaxed max-w-xl">We build your company into a global brand. Secure the elite human resources needed to scale global infrastructure with ease.</p>
            <div className="space-y-12">
               {[
                 {icon: 'fa-earth-asia', text: 'HQ in India Tech Hubs, Global Distribution'},
                 {icon: 'fa-shield-halved', text: '100% Contractual & Legal Compliance Standard'},
                 {icon: 'fa-bolt', text: '48hr Sourcing-to-Interview Nexus Pipeline'}
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-10 group">
                    <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#64FFDA] group-hover:bg-[#64FFDA] group-hover:text-[#020617] transition-all duration-700 shadow-2xl">
                       <i className={`fas ${item.icon} text-2xl`}></i>
                    </div>
                    <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">{item.text}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="flex-1">
            <InquiryAssistant externalTypeTrigger={activeInquiryTrigger?.type} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
