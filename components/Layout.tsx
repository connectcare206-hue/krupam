import React, { useState, useEffect } from 'react';

const LogoIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Connectcare Logo">
    <defs>
      <linearGradient id="nexusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#64FFDA" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
    <path d="M30 50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50C70 61.0457 61.0457 70 50 70C38.9543 70 30 61.0457 30 50Z" stroke="url(#nexusGrad)" strokeWidth="2" strokeDasharray="5 5"/>
    <path d="M25 50C25 36.1929 36.1929 25 50 25C63.8071 25 75 36.1929 75 50C75 63.8071 63.8071 75 50 75" stroke="url(#nexusGrad)" strokeWidth="8" strokeLinecap="round" style={{ opacity: 0.8 }}/>
    <path d="M35 50C35 41.7157 41.7157 35 50 35C58.2843 35 65 41.7157 65 50C65 58.2843 58.2843 65 50 65" stroke="white" strokeWidth="4" strokeLinecap="round" style={{ opacity: 0.3 }}/>
    <circle cx="50" cy="50" r="4" fill="#64FFDA"><animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/></circle>
  </svg>
);

const Logo = ({ size = "md", onClick }: { size?: string, onClick?: () => void }) => {
  const isSmall = size === "sm";
  return (
    <div className="flex items-center gap-5 group cursor-pointer" onClick={onClick} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && onClick?.()}>
      <div className={`relative flex items-center justify-center rounded-2xl border border-white/10 bg-[#0A192F] shadow-[0_0_30px_rgba(100,255,218,0.1)] transition-all duration-700 group-hover:scale-105 ${isSmall ? 'w-12 h-12' : 'w-20 h-20'}`}>
        <LogoIcon className={isSmall ? "w-8 h-8" : "w-14 h-14"} />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-black tracking-tighter ${isSmall ? 'text-lg' : 'text-2xl'} text-white uppercase`}>CONNECTCARE <span className="text-[#64FFDA] lowercase font-medium">services</span></span>
        <span className={`font-black tracking-[0.3em] ${isSmall ? 'text-[7px]' : 'text-[10px]'} text-slate-500 uppercase mt-1`}>Building Global Brands</span>
      </div>
    </div>
  );
};

export const Layout: React.FC<{ children: React.ReactNode; onActionTrigger?: (type: 'Employer' | 'Candidate' | 'General') => void; onNavigate?: (target: 'home' | 'services') => void }> = ({ children, onActionTrigger, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-2xl border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-10'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Logo size={scrolled ? "sm" : "md"} onClick={() => onNavigate?.('home')} />
          <nav className="hidden lg:flex items-center gap-12" aria-label="Main Navigation">
            <button onClick={() => onNavigate?.('home')} className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-[#64FFDA] transition-colors">Home</button>
            <button onClick={() => onNavigate?.('services')} className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-[#64FFDA] transition-colors">Services</button>
            <button onClick={() => onActionTrigger?.('Employer')} className="bg-[#64FFDA] text-[#020617] px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all">Hire Talent</button>
          </nav>
        </div>
      </header>
      <main className="relative z-10">{children}</main>
      <footer className="bg-[#020617] text-slate-500 py-32 border-t border-white/5 relative z-10" aria-label="Footer Section">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="grid lg:grid-cols-4 gap-20 mb-24">
            <div>
              <Logo size="sm" onClick={() => onNavigate?.('home')} />
              <p className="mt-10 text-base leading-relaxed max-w-xs text-slate-400">Transforming your business into a global brand by deploying elite talent hubs engineered for scale.</p>
            </div>
            <div>
              <h4 className="text-white font-black mb-10 uppercase tracking-[0.4em] text-[11px]">Specialized Sectors</h4>
              <ul className="space-y-5 text-sm font-bold">
                <li>IT & AI Engineering</li>
                <li>Bookkeeping & Finance</li>
                <li>24/7 CX Excellence</li>
                <li>Pharma & Research</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black mb-10 uppercase tracking-[0.4em] text-[11px]">Resources</h4>
              <ul className="space-y-5 text-sm font-bold">
                <li><button onClick={() => onNavigate?.('home')} className="hover:text-[#64FFDA] transition-colors">Nexus Home</button></li>
                <li><button onClick={() => onNavigate?.('services')} className="hover:text-[#64FFDA] transition-colors">Portfolios</button></li>
                <li>ISO 9001:2015 Hub</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black mb-10 uppercase tracking-[0.4em] text-[11px]">Direct Line</h4>
              <div className="space-y-5 text-sm font-bold">
                <p><i className="fas fa-envelope text-[#64FFDA] mr-4" aria-hidden="true"></i> connectcare206@gmail.com</p>
                <p><i className="fas fa-phone text-[#64FFDA] mr-4" aria-hidden="true"></i> +91 8460335032</p>
                <div className="flex gap-6 mt-10 justify-center lg:justify-start">
                  <a href="https://wa.me/918460335032" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:border-green-400 bg-white/5 transition-colors" aria-label="Contact on WhatsApp"><i className="fab fa-whatsapp"></i></a>
                  <a href="https://www.linkedin.com/company/connectcare-services/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:border-blue-400 bg-white/5 transition-colors" aria-label="Visit LinkedIn Page"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[11px] font-black uppercase tracking-[0.3em]">&copy; 2025 Connectcare Services. ISO 9001:2015 Certified. Build Your Brand.</p>
        </div>
      </footer>
    </div>
  );
};