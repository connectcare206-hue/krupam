import React from 'react';

interface ServiceDetailProps {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
  bullets: string[];
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

const ServiceCard: React.FC<ServiceDetailProps> = ({ icon, title, subtitle, description, bullets, ctaText = "Request Candidate Profiles", onCtaClick, className }) => (
  <div className={`glass-card p-10 md:p-12 rounded-[3.5rem] group hover:border-[#64FFDA]/50 transition-all duration-700 flex flex-col h-full border border-white/5 relative overflow-hidden ${className}`}>
    <div className="absolute -right-10 -top-10 text-9xl text-white/5 group-hover:text-[#64FFDA]/10 transition-all duration-700 pointer-events-none">
      <i className={`fas ${icon}`}></i>
    </div>
    
    <div className="flex items-center gap-6 mb-10 relative z-10">
      <div className="w-16 h-16 bg-[#64FFDA]/5 border border-[#64FFDA]/10 rounded-2xl flex items-center justify-center text-[#64FFDA] text-3xl group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(100,255,218,0.15)]">
        <i className={`fas ${icon}`}></i>
      </div>
      <div>
        <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tighter">{title}</h3>
        {subtitle && <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mt-1">{subtitle}</p>}
      </div>
    </div>
    
    <p className="text-slate-400 text-base leading-relaxed mb-10 flex-grow relative z-10">{description}</p>
    
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 relative z-10">
      {bullets.map((bullet, i) => (
        <li key={i} className="flex items-center gap-3 text-[11px] font-black text-slate-300 uppercase tracking-widest">
          <div className="w-1.5 h-1.5 rounded-full bg-[#64FFDA] shadow-[0_0_10px_rgba(100,255,218,0.8)]"></div>
          {bullet}
        </li>
      ))}
    </ul>
    
    <button 
      onClick={onCtaClick}
      className="w-full bg-white/5 border border-white/10 text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-[#64FFDA] hover:text-[#020617] hover:shadow-[0_0_40px_rgba(100,255,218,0.4)] transition-all active:scale-95 relative z-10"
    >
      {ctaText}
    </button>
  </div>
);

export const ServicesPage: React.FC<{ onAction: (type: 'Employer' | 'Candidate' | 'General') => void }> = ({ onAction }) => {
  return (
    <div className="pt-48 pb-32 animate-in fade-in duration-1000 bg-[#020617]">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <div className="max-w-5xl mx-auto text-center mb-32">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-10 tracking-tighter">
            Nexus <span className="text-[#64FFDA]">Services.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl mx-auto opacity-80">
            A comprehensive suite of recruitment solutions engineered for the global enterprise. Sourcing, vetting, and deploying elite talent across the world's fastest industries.
          </p>
        </div>

        {/* Services Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* IT Recruitment & AI Staffing */}
          <div className="md:col-span-8">
            <ServiceCard 
              icon="fa-laptop-code"
              title="IT Recruitment & AI Staffing"
              subtitle="Domestic & International"
              description="Deploying elite software engineers and AI researchers at the speed of innovation. We source high-impact talent across India and international markets, specializing in complex tech stacks and rigorous screening."
              bullets={["Software Developers", "AI/ML Engineers", "Data Specialists", "DevOps & SRE", "QA Automation"]}
              onCtaClick={() => onAction('Employer')}
            />
          </div>

          {/* Contract Staffing */}
          <div className="md:col-span-4">
            <ServiceCard 
              icon="fa-user-clock"
              title="Contract Staffing"
              subtitle="Manpower Solutions"
              description="Scalable, temporary, and project-based manpower with a quick turnaround and significant cost advantage for seasonal peaks."
              bullets={["Flexible Contracts", "Seasonal Staffing", "Temporary Hires", "Project Teams"]}
              onCtaClick={() => onAction('Employer')}
            />
          </div>

          {/* RPO */}
          <div className="md:col-span-5">
            <ServiceCard 
              icon="fa-building-circle-check"
              title="RPO Services"
              subtitle="Managed Outsourcing"
              description="End-to-end recruitment process outsourcing that scales with your volume, reduces cost-per-hire, and accelerates time-to-onboard."
              bullets={["Project RPO", "On-Demand Support", "Full Lifecycle Mgmt", "Hiring Velocity"]}
              onCtaClick={() => onAction('Employer')}
            />
          </div>

          {/* Virtual Staffing */}
          <div className="md:col-span-7">
            <ServiceCard 
              icon="fa-laptop-house"
              title="Virtual Staffing Solutions"
              subtitle="Remote Operations"
              description="High-performance remote teams designed for the modern business. From admin support to data professionals, we build your virtual engine room."
              bullets={["Virtual Assistants", "Remote Back Office", "Virtual CX Support", "Admin & Data Pros"]}
              onCtaClick={() => onAction('Employer')}
            />
          </div>

          {/* Overseas & Expat */}
          <div className="md:col-span-6">
            <ServiceCard 
              icon="fa-earth-americas"
              title="Overseas HR & Expat"
              subtitle="Consultancy Hub"
              description="Easing international hiring complexities with strategic consultancy, cross-border sourcing, and visa compliance advisory."
              bullets={["Global Sourcing", "Visa & Compliance", "Cross-Border Hire", "Strategic HR"]}
              onCtaClick={() => onAction('Employer')}
            />
          </div>

          {/* Executive Search */}
          <div className="md:col-span-6">
            <ServiceCard 
              icon="fa-crown"
              title="Executive Search"
              subtitle="Strategic Leadership"
              description="Confidential headhunting for senior leadership and high-impact project roles. Market expertise matched with elite talent."
              bullets={["C-Suite Search", "Senior Roles", "Project Specialists", "Confidential Hiring"]}
              onCtaClick={() => onAction('Employer')}
            />
          </div>

          {/* Customer Support */}
          <div className="md:col-span-7">
            <ServiceCard 
              icon="fa-headset"
              title="CX & AI Support Staffing"
              subtitle="Voice & Chat"
              description="Reliable, 24/7 customer service teams powered by professional agents and AI-driven voice/chat assistants."
              bullets={["Voice Support", "Chat Support", "AI Voice Integration", "24/7 Global Teams"]}
              onCtaClick={() => onAction('Employer')}
            />
          </div>

          {/* Resume Formatting */}
          <div className="md:col-span-5">
            <ServiceCard 
              icon="fa-id-card"
              title="Resume & CV Sourcing"
              subtitle="Profile Optimization"
              description="Enhancing candidate visibility and placement success through professional formatting and elite CV sourcing services."
              bullets={["CV Formatting", "Talent Sourcing", "Visibility Audit", "Placement Success"]}
              onCtaClick={() => onAction('Candidate')}
              ctaText="Optimize Profile"
            />
          </div>

          {/* Sector Specific - Large Block */}
          <div className="md:col-span-12">
            <div className="glass-card p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-[#0A192F] to-[#020617] border-[#64FFDA]/20 relative overflow-hidden group">
               <div className="absolute -right-20 -bottom-20 text-[15rem] text-white/5 group-hover:text-[#64FFDA]/10 transition-all duration-1000">
                  <i className="fas fa-industry"></i>
               </div>
               <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
                  <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Sector-Specific <br /><span className="text-[#64FFDA]">Verticals.</span></h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-12">We deploy domain-expert talent pools across specialized sectors, providing contractual and project-based hiring with industry-specific screening benefits.</p>
                    <div className="grid grid-cols-2 gap-6">
                       {[
                         {icon: 'fa-solar-panel', label: 'Solar Industry'},
                         {icon: 'fa-building', label: 'Real Estate'},
                         {icon: 'fa-plane', label: 'Travel & Tourism'},
                         {icon: 'fa-folder-open', label: 'Back-Office Admin'}
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-[#64FFDA]/30 transition-all">
                            <i className={`fas ${item.icon} text-[#64FFDA] text-xl`}></i>
                            <span className="text-[11px] font-black text-white uppercase tracking-widest">{item.label}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex flex-col items-center lg:items-end">
                    <div className="space-y-6 text-center lg:text-right mb-12">
                      <p className="text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.4em]">The Sector Advantage</p>
                      <h3 className="text-2xl font-black text-white">Niche screening for high-growth firms.</h3>
                    </div>
                    <button onClick={() => onAction('Employer')} className="bg-[#64FFDA] text-[#020617] px-16 py-8 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:shadow-[0_0_50px_rgba(100,255,218,0.5)] transition-all">Start Sector Hiring</button>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Final CTA / Benefits Summary */}
        <div className="mt-40 pt-24 border-t border-white/5">
          <div className="text-center mb-24">
            <h2 className="text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.6em] mb-8">The Connectcare Promise</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Synchronized Global Growth.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-7xl mx-auto mb-32">
            {[
              {title: "Global Reach", desc: "Access top 1% Indian talent for Western markets."},
              {title: "Cost Efficient", desc: "Reduce staffing overheads by up to 70%."},
              {title: "Flex Models", desc: "Contract, Full-time, or Project-based hiring."},
              {title: "Vetted Quality", desc: "Rigorous technical and cultural screening."},
              {title: "Full Support", desc: "Remote and onsite assistance for global hubs."}
            ].map((benefit, i) => (
              <div key={i} className="space-y-6 text-center group">
                <div className="w-12 h-1 bg-white/10 group-hover:bg-[#64FFDA] mx-auto transition-all"></div>
                <h4 className="text-lg font-black text-white uppercase tracking-tight">{benefit.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-bold">{benefit.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button onClick={() => onAction('Employer')} className="bg-white text-[#020617] px-16 py-7 rounded-3xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#64FFDA] transition-all shadow-3xl">Start Your Global Hiring Journey</button>
            <button onClick={() => onAction('General')} className="border border-white/20 text-white px-16 py-7 rounded-3xl font-black text-xs uppercase tracking-[0.2em] hover:border-[#64FFDA] hover:text-[#64FFDA] transition-all bg-white/5 backdrop-blur-md">Talk To Our Recruitment Experts</button>
          </div>
        </div>
      </div>
    </div>
  );
};