
import React from 'react';
import { Layout } from './components/Layout';
import { AICostCalculator } from './components/AICostCalculator';
import { SERVICES, PRICING_PLANS, PROCESS_STEPS, TESTIMONIALS } from './constants';

const Hero = () => (
  <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden bg-white">
    <div className="absolute top-0 right-0 w-2/5 h-full bg-slate-50 -z-10 rounded-bl-[120px] hidden lg:block"></div>
    
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-3/5">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            Your Recruitment Partner, Not Outsourcing
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] mb-8">
            Elite Talent.<br />
            <span className="text-blue-600">Pure ROI.</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-10 max-w-2xl leading-relaxed font-medium">
            Scale your <strong className="text-slate-900">IT, AI, Pharma, or Finance</strong> teams with vetted global professionals at <strong>40-70% lower costs</strong>. You keep 100% control over selection.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <a href="#contact" className="bg-blue-600 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/20 active:scale-95">Hire Global Talent</a>
            <a href="#services" className="bg-slate-900 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 active:scale-95">Schedule Interviews</a>
          </div>
          
          <div className="mt-16 flex items-center gap-10">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-lg">
                   <img src={`https://i.pravatar.cc/150?u=nexus${i}`} alt="user" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Global Support</p>
              <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">USA • UK • CANADA • AUSTRALIA</p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/5 relative">
          <div className="bg-slate-900 p-10 rounded-[3rem] shadow-3xl text-white transform hover:rotate-1 transition-transform duration-500 relative z-10">
            <div className="flex justify-between items-start mb-12">
              <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center">
                <i className="fas fa-chart-line text-xl"></i>
              </div>
              <span className="text-[10px] font-black bg-white/10 px-3 py-1 rounded-full uppercase tracking-widest">Efficiency</span>
            </div>
            <p className="text-xs text-slate-400 font-bold mb-2 uppercase">Cost Advantage</p>
            <h4 className="text-4xl font-black mb-10 leading-none">Reduce Cost.<br /><span className="text-blue-500">Keep Control.</span><br /><span className="text-2xl text-slate-500">Global Standards.</span></h4>
            <div className="bg-white/5 p-6 rounded-2xl italic text-sm text-slate-300">
              "We provide pre-screened talent at $4–5/hour instead of $10–20/hour charged by traditional agencies."
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 bg-white relative">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4">The Recruitment Partner</h2>
          <h3 className="text-5xl font-black text-slate-900 mb-8 leading-tight">About Connectcare Services.</h3>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
            Connectcare Services is a professional global recruitment company specializing in contractual staffing for IT, AI, Pharma, and Bookkeeping & Accounting roles. 
          </p>
          <div className="space-y-6 mb-10">
            <p className="text-slate-500 leading-relaxed border-l-4 border-blue-600 pl-6 italic">
              "We serve clients in the USA, UK, Canada, and Australia, delivering pre-screened, cost-effective talent from India and beyond. Unlike traditional outsourcing firms, we are a strategic partner where <strong>you</strong> maintain full control over the final hire."
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-2 text-blue-600">Cost-Efficient</h4>
                <p className="text-xs text-slate-500 font-medium">Competitive salary bands based on experience (USD 500-950/mo).</p>
              </div>
              <div>
                <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-2 text-blue-600">Client Controlled</h4>
                <p className="text-xs text-slate-500 font-medium">You interview and finalize candidates. We handle sourcing and vetting.</p>
              </div>
            </div>
          </div>
          <a href="#contact" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl active:scale-95">Talk to Our Recruitment Team</a>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="bg-slate-50 rounded-[3rem] p-4 relative">
             <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Professional Recruitment" className="rounded-[2.5rem] shadow-2xl" />
             <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl">
               <p className="text-3xl font-black mb-1">70%</p>
               <p className="text-[10px] font-bold uppercase tracking-widest">Avg. Hiring Savings</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-32 bg-slate-950 text-white relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Our Expertise</h2>
        <h3 className="text-5xl md:text-6xl font-black text-white">Services Designed for Scale.</h3>
        <p className="mt-8 text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
          Enterprise-ready recruitment solutions across high-demand sectors, optimized for speed, quality, and significant cost advantage.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {Object.entries(SERVICES).map(([key, service], idx) => (
          <div key={idx} className="bg-slate-900 border border-white/5 p-10 rounded-[3rem] hover:border-blue-500/50 hover:bg-slate-900/60 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <i className={`fas ${service.icon} text-2xl`}></i>
              </div>
              <h4 className="text-2xl font-black mb-4 leading-tight">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">{service.description}</p>
              <div className="space-y-4 mb-10">
                {service.roles.map((role, rIdx) => (
                  <div key={rIdx} className="flex items-center gap-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    {role}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[10px] font-black uppercase text-blue-500 tracking-[0.2em] border-t border-white/5 pt-8">{service.benefits}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-600 rounded-[3rem] p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-3xl shadow-blue-900/30">
        <div className="md:w-2/3">
          <h4 className="text-4xl font-black mb-6">Build Your Remote Team Within 48 Hours.</h4>
          <p className="text-blue-100 font-bold text-lg opacity-90 leading-relaxed">We deliver pre-screened candidates for IT, AI, Pharma, and Accounting who fit your budget and timeline.</p>
        </div>
        <a href="#contact" className="bg-slate-900 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-800 transition-all active:scale-95 flex-shrink-0 shadow-2xl">Schedule Interviews</a>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-32 bg-slate-50 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-24 items-start">
        <div className="lg:w-1/3 lg:sticky lg:top-40">
          <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4">The Workflow</h2>
          <h3 className="text-5xl font-black text-slate-900 mb-8 leading-none">Global Hiring Made Simple.</h3>
          <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
            We act as a transparent layer between you and world-class talent. You maintain 100% decision-making power.
          </p>
          <a href="#contact" className="inline-flex items-center gap-4 text-blue-600 font-black uppercase tracking-widest text-xs group">
            Start the journey <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
          </a>
        </div>
        
        <div className="lg:w-2/3 space-y-10">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="flex gap-12 group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all duration-500">
              <div className="flex-shrink-0">
                <div className="text-7xl font-black text-slate-100 group-hover:text-blue-600/10 transition-all duration-500 leading-none">{step.number}</div>
              </div>
              <div className="pt-2">
                <h4 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed max-w-xl">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="pricing" className="py-32 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">Pricing Transparency</h2>
        <h3 className="text-5xl font-black text-slate-900">Reduced Cost. Keep Control.</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-24">
        {PRICING_PLANS.map((plan, idx) => (
          <div key={idx} className={`p-16 rounded-[3rem] border transition-all duration-500 hover:shadow-3xl relative overflow-hidden group ${idx === 1 ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-100'}`}>
            <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-8">{plan.experience}</h4>
            <div className="flex items-baseline gap-3 mb-12">
              <span className={`text-6xl font-black ${idx === 1 ? 'text-white' : 'text-slate-900'}`}>{plan.cost}</span>
              <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">/ Month</span>
            </div>
            <div className="bg-blue-600/10 text-blue-500 px-8 py-5 rounded-2xl mb-12 flex justify-between items-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Estimated Rate</span>
              <span className="text-2xl font-black">{plan.hourlyRate}/hr</span>
            </div>
            <ul className="space-y-6">
              {plan.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-center gap-5 text-sm font-bold opacity-70">
                  <i className="fas fa-check text-blue-600"></i>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <AICostCalculator />
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 bg-white">
    <div className="container mx-auto px-6">
      <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 translate-x-1/4"></div>
        <div className="flex flex-col lg:flex-row gap-20 relative z-10">
          <div className="lg:w-1/2">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-8">Consultation</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-8 leading-none">Build your remote team.</h3>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
              Book a free discovery call. We'll map your requirements and share suitable profiles for your first batch of interviews within 48 hours.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                  <i className="fas fa-envelope text-blue-500 group-hover:text-white text-xl"></i>
                </div>
                <span className="text-lg font-black tracking-tight">connectcare206@gmail.com</span>
              </div>
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                  <i className="fas fa-phone text-blue-500 group-hover:text-white text-xl"></i>
                </div>
                <span className="text-lg font-black tracking-tight">+91 8460335032</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:border-blue-500 outline-none transition-all font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:border-blue-500 outline-none transition-all font-bold" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Company</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:border-blue-500 outline-none transition-all font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Hiring Requirements</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:border-blue-500 outline-none transition-all font-bold min-h-[160px]"></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.2em] py-7 rounded-2xl shadow-3xl shadow-blue-900/40 transition-all active:scale-95 text-xs">Hire Global Talent</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Process />
      <PricingSection />
      <Contact />
    </Layout>
  );
};

export default App;
