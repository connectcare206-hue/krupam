
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { AICostCalculator } from './components/AICostCalculator';
import { VoiceAgent } from './components/VoiceAgent';
import { InquiryAssistant } from './components/InquiryAssistant';
import { SERVICES, PRICING_PLANS, PROCESS_STEPS } from './constants';

const Hero = () => (
  <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-mesh">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-3/5 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600/10 border border-blue-600/20 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-10">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            Global Recruitment Partner & Offshore Hub
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1] tracking-tight mb-8">
            Global Talent.<br />
            <span className="text-blue-600">Local Costs.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-medium">
            Helping companies in <strong className="text-slate-900">USA, UK, Canada & AU</strong> hire pre-screened professionals at 70% lower costs. You interview, you select, we deliver.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
            <div className="p-6 bg-slate-900 text-white rounded-[2rem] shadow-2xl hover:scale-105 transition-all group">
              <h3 className="font-black text-lg mb-2 uppercase tracking-tight">For Employers</h3>
              <p className="text-xs text-slate-400 mb-6">Scale your IT, AI, or Sales teams in 48 hours.</p>
              <a href="#contact" className="block text-center bg-blue-600 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-500">Hire Elite Talent</a>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-[2rem] shadow-xl hover:scale-105 transition-all group">
              <h3 className="font-black text-lg mb-2 text-slate-900 uppercase tracking-tight">For Candidates</h3>
              <p className="text-xs text-slate-500 mb-6">Join top-tier firms in USA, UK, and Australia.</p>
              <a href="#contact" className="block text-center bg-slate-100 text-slate-900 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200">Submit Resume</a>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
             <div className="flex items-center gap-2"><i className="fas fa-certificate text-blue-600"></i> <span className="text-[10px] font-bold uppercase tracking-widest">ISO 9001 Certified</span></div>
             <div className="flex items-center gap-2"><i className="fas fa-shield-halved text-blue-600"></i> <span className="text-[10px] font-bold uppercase tracking-widest">GDPR Compliant</span></div>
             <div className="flex items-center gap-2"><i className="fas fa-check-double text-blue-600"></i> <span className="text-[10px] font-bold uppercase tracking-widest">Vetted 500k+ Database</span></div>
          </div>
        </div>
        
        <div className="lg:w-2/5 hidden lg:block">
          <div className="relative">
             <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Recruitment Consultant" className="rounded-[4rem] shadow-3xl grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
             <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[3rem] shadow-3xl border border-slate-100">
                <p className="text-5xl font-black text-blue-600 mb-1">48h</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Average Sourcing Time</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TrustBadges = () => (
  <div className="bg-slate-50 py-12 border-y border-slate-100">
    <div className="container mx-auto px-6">
      <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Serving Industry Leaders In</p>
      <div className="flex flex-wrap justify-center gap-10 md:gap-24 opacity-40">
        {['Pharma', 'Fintech', 'SaaS', 'Solar', 'Real Estate', 'Logistics'].map(hub => (
          <span key={hub} className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter uppercase">{hub}</span>
        ))}
      </div>
    </div>
  </div>
);

const ServicesGrid = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Core', 'Technology', 'Industry Specific', 'Operations', 'Managed Services'];
  
  const filteredServices = Object.entries(SERVICES).filter(([_, s]) => 
    activeCategory === 'All' || s.category === activeCategory
  );

  return (
    <section id="services" className="py-32 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em] mb-6">Our Solutions</h2>
          <h3 className="text-5xl font-black mb-8">Specialized Hiring Channels.</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(([key, service], idx) => (
            <article key={idx} className="bg-slate-800/50 border border-white/5 p-12 rounded-[3.5rem] hover:border-blue-600 transition-all duration-500 group">
              <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <i className={`fas ${service.icon} text-2xl`}></i>
              </div>
              <h4 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">{service.description}</p>
              <div className="space-y-3">
                {service.roles.slice(0, 3).map((role, rIdx) => (
                  <div key={rIdx} className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    {role}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <TrustBadges />
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-6">Expert Recruitment Partner</h2>
              <h3 className="text-5xl font-black text-slate-900 mb-8 leading-tight">Scale Without the Margins.</h3>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                Connectcare Services is not an outsourcing firm. We are your **Offshore Recruitment Hub**. 
                You get full control over candidates, while we handle the sourcing, screening, and logistics in India. 
                Perfect for firms in the **USA, UK, Canada, and Australia** looking to optimize for profit.
              </p>
              <div className="flex gap-12">
                 <div>
                    <p className="text-4xl font-black text-slate-900 mb-2">500k+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Talent Database</p>
                 </div>
                 <div>
                    <p className="text-4xl font-black text-slate-900 mb-2">40%+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. Client Growth</p>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
               <div className="p-8 bg-slate-50 rounded-[3rem] text-center border border-slate-100">
                  <i className="fas fa-users-viewfinder text-3xl text-blue-600 mb-4"></i>
                  <h4 className="font-black uppercase text-xs tracking-widest text-slate-900">Pre-Screened</h4>
               </div>
               <div className="p-8 bg-slate-50 rounded-[3rem] text-center border border-slate-100 mt-12">
                  <i className="fas fa-dollar-sign text-3xl text-blue-600 mb-4"></i>
                  <h4 className="font-black uppercase text-xs tracking-widest text-slate-900">Cost Effective</h4>
               </div>
               <div className="p-8 bg-slate-50 rounded-[3rem] text-center border border-slate-100 -mt-12">
                  <i className="fas fa-hand-holding-heart text-3xl text-blue-600 mb-4"></i>
                  <h4 className="font-black uppercase text-xs tracking-widest text-slate-900">High Retention</h4>
               </div>
               <div className="p-8 bg-slate-50 rounded-[3rem] text-center border border-slate-100">
                  <i className="fas fa-microchip text-3xl text-blue-600 mb-4"></i>
                  <h4 className="font-black uppercase text-xs tracking-widest text-slate-900">AI Enabled</h4>
               </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesGrid />
      <AICostCalculator />
      <VoiceAgent />
      
      {/* Contact Section Refined with AI Inquiry Assistant */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-5xl font-black text-slate-900 mb-8 leading-none">Ready to hire? <br />Or ready to be hired?</h3>
              <p className="text-xl text-slate-500 mb-12 font-medium">Use our Intelligent Inquiry Assistant to get started. Our AI will analyze your requirement and route you to the right department instantly.</p>
              <div className="space-y-6">
                 <div className="flex items-center gap-4 text-slate-900 font-bold group">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <i className="fas fa-check"></i>
                    </div>
                    No Upfront Sourcing Fees
                 </div>
                 <div className="flex items-center gap-4 text-slate-900 font-bold group">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <i className="fas fa-shield-check"></i>
                    </div>
                    Global Compliance Management
                 </div>
                 <div className="flex items-center gap-4 text-slate-900 font-bold group">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <i className="fas fa-user-tie"></i>
                    </div>
                    Dedicated Client Manager
                 </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <InquiryAssistant />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
