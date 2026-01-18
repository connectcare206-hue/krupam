import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { AICostCalculator } from './components/AICostCalculator';
import { VoiceAgent } from './components/VoiceAgent';
import { InquiryAssistant } from './components/InquiryAssistant';
import { SERVICES, PROCESS_STEPS } from './constants';
import { InquiryType } from './types';
import { ServicesPage } from './ServicesPage';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'services'>('home');
  const [activeInquiryTrigger, setActiveInquiryTrigger] = useState<{ type: InquiryType, key: number } | null>(null);

  const handleHeroAction = (type: InquiryType) => {
    setActiveInquiryTrigger({ type, key: Date.now() });
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (target: 'home' | 'services') => {
    setView(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout 
      onActionTrigger={handleHeroAction} 
      onNavigate={handleNavigate}
      currentView={view}
    >
      {view === 'home' ? (
        <>
          {/* Redesigned Bold Hero Section */}
          <section className="relative min-h-screen pt-40 pb-20 flex items-center overflow-visible">
            <div className="container mx-auto px-6 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                <div className="lg:w-3/5 text-center lg:text-left">
                  <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#64FFDA]/5 border border-[#64FFDA]/10 text-[#64FFDA] rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-12 animate-in slide-in-from-top-4 duration-700">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-[#64FFDA] animate-pulse"></span>
                    Elite Global Recruitment & Contractual Staffing
                  </div>
                  
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white mb-10 leading-[0.9] tracking-tighter animate-in slide-in-from-left-10 duration-1000">
                    Sourcing <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] via-cyan-400 to-blue-500">Global Elite.</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-slate-300 mb-14 max-w-2xl leading-relaxed font-medium opacity-95 animate-in fade-in duration-1000 delay-300">
                    Optimizing the enterprise workforce with pre-screened talent from India. Dedicated <span className="text-white font-bold border-b-2 border-[#64FFDA]/30 pb-1">Domestic & International</span> staffing for high-growth sectors across USA, UK, Canada & AU.
                  </p>

                  {/* Trust Bar with Flags */}
                  <div className="flex flex-wrap items-center gap-10 mb-20 justify-center lg:justify-start">
                    <div className="flex items-center gap-6 bg-white/5 border border-white/10 px-10 py-5 rounded-[2rem] backdrop-blur-xl">
                       <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Markets:</span>
                       <div className="flex gap-4 text-3xl filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] hover:scale-110 transition-transform cursor-default">🇺🇸 🇬🇧 🇨🇦 🇦🇺</div>
                    </div>
                    <div className="flex items-center gap-3 px-10 py-5 bg-[#64FFDA]/5 border border-[#64FFDA]/20 rounded-[2rem] backdrop-blur-xl group hover:border-[#64FFDA] transition-all">
                       <i className="fas fa-certificate text-[#64FFDA] text-xl group-hover:rotate-12 transition-transform"></i>
                       <span className="text-[11px] font-black uppercase tracking-widest text-[#64FFDA]">ISO 9001:2015 HUB</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                    <button 
                      onClick={() => handleHeroAction('Employer')}
                      className="bg-[#64FFDA] text-[#020617] px-16 py-7 rounded-3xl font-black text-[13px] uppercase tracking-[0.2em] hover:shadow-[0_0_50px_rgba(100,255,218,0.5)] transition-all hover:-translate-y-1.5 active:scale-95 shadow-2xl"
                    >
                      Hire Talent Now
                    </button>
                    <button 
                      onClick={() => handleNavigate('services')}
                      className="border border-white/20 text-white px-16 py-7 rounded-3xl font-black text-[13px] uppercase tracking-[0.2em] hover:border-[#64FFDA] hover:text-[#64FFDA] transition-all hover:-translate-y-1.5 active:scale-95 bg-white/5 backdrop-blur-md"
                    >
                      Talk to Our Team
                    </button>
                  </div>
                </div>
                
                <div className="lg:w-2/5 flex justify-center perspective-1000 animate-in fade-in zoom-in duration-1000 delay-500">
                  <div className="globe-container">
                     <div className="globe"></div>
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[110%] h-[110%] border border-[#64FFDA]/5 rounded-full animate-ping opacity-10"></div>
                        <div className="w-[140%] h-[140%] border border-[#64FFDA]/5 rounded-full animate-pulse opacity-5"></div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Preview Section */}
          <section id="services-preview" className="py-32 relative">
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-32">
                <h2 className="text-[#64FFDA] text-[11px] font-black uppercase tracking-[0.7em] mb-8">Expertise Verticals</h2>
                <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter">Enterprise Power.</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 auto-rows-[320px]">
                <div className="md:col-span-8 glass-card rounded-[4.5rem] p-16 flex flex-col justify-end group overflow-hidden relative border border-white/10">
                   <div className="absolute top-12 right-12 text-9xl text-white/5 group-hover:text-[#64FFDA]/10 transition-all duration-700">
                      <i className="fas fa-microchip"></i>
                   </div>
                   <h4 className="text-5xl font-black text-white mb-8 tracking-tighter leading-none">IT & AI <br />Staffing Hub.</h4>
                   <p className="text-slate-400 text-lg max-w-xl mb-12 leading-relaxed font-medium">Sourcing elite Indian full-stack, AI/ML, and DevOps talent for western engineering hubs.</p>
                   <button onClick={() => handleNavigate('services')} className="w-fit text-[12px] font-black uppercase tracking-[0.3em] text-[#64FFDA] border-b-2 border-[#64FFDA]/20 pb-3 hover:border-[#64FFDA] transition-all flex items-center gap-4">
                     View All Vertical Services <i className="fas fa-arrow-right text-[12px] group-hover:translate-x-2 transition-transform"></i>
                   </button>
                </div>

                <div className="md:col-span-4 glass-card rounded-[4.5rem] p-12 flex flex-col justify-center text-center group border border-white/10">
                   <div className="w-24 h-24 bg-[#64FFDA]/5 border border-[#64FFDA]/10 rounded-[2.5rem] flex items-center justify-center text-[#64FFDA] text-5xl mx-auto mb-10 group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(100,255,218,0.15)]">
                      <i className="fas fa-solar-panel"></i>
                   </div>
                   <h4 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Solar Edge.</h4>
                   <p className="text-slate-500 text-base leading-relaxed font-bold">Niche staffing for the renewable energy revolution.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Model Section */}
          <section id="process" className="py-40 relative">
            <div className="container mx-auto px-6 relative z-10">
              <div className="flex flex-col lg:flex-row gap-40 items-start">
                <div className="lg:w-1/3 lg:sticky lg:top-48">
                  <h2 className="text-[#64FFDA] text-[11px] font-black uppercase tracking-[0.7em] mb-10">Operational Model</h2>
                  <h3 className="text-6xl md:text-7xl font-black text-white leading-[1] mb-12 tracking-tighter">Velocity <br />Hiring.</h3>
                  <p className="text-xl text-slate-400 font-medium mb-16 leading-relaxed">We optimize the sourcing friction, delivering deployment-ready talent in under 48 hours.</p>
                  
                  <div className="p-12 border border-white/5 rounded-[4rem] bg-white/5 backdrop-blur-2xl relative overflow-hidden group hover:border-[#64FFDA]/30 transition-all">
                     <div className="text-6xl font-black text-[#64FFDA] mb-3 tracking-tighter">70% ROI</div>
                     <p className="text-[11px] font-black uppercase tracking-widest text-slate-500">Annual Margin Retention Advantage</p>
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
                           <h4 className="text-4xl font-black text-white mb-8 tracking-tight leading-none">{step.title}</h4>
                           <p className="text-slate-400 text-lg leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <AICostCalculator onSavingsClaimed={() => handleHeroAction('Employer')} />
        </>
      ) : (
        <ServicesPage onAction={handleHeroAction} />
      )}

      <VoiceAgent />
      
      {/* Contact Hub Section */}
      <section id="contact" className="py-40 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-40">
            <div className="lg:w-1/2">
               <h3 className="text-6xl md:text-8xl font-black text-white mb-12 leading-[0.9] tracking-tighter">Scale Your <br /><span className="text-[#64FFDA]">Nexus Team.</span></h3>
               <p className="text-2xl text-slate-400 mb-20 leading-relaxed max-w-xl">Our AI intake engine is ready to classify your enterprise requirements. Connect directly with specialized talent hubs for immediate deployment.</p>
               <div className="space-y-12">
                  {[
                    {icon: 'fa-microchip', text: 'HQ in India Tech Hubs, Global Distribution'},
                    {icon: 'fa-shield-check', text: '100% Contractual & Legal Compliance Standard'},
                    {icon: 'fa-user-check', text: '48hr Sourcing-to-Interview Nexus Pipeline'}
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
            <div className="lg:w-1/2">
              <InquiryAssistant externalTypeTrigger={activeInquiryTrigger?.type} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;