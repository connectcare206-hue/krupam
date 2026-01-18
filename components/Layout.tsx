import React, { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onActionTrigger?: (type: 'Employer' | 'Candidate' | 'General') => void;
  onNavigate?: (target: 'home' | 'services') => void;
  currentView?: 'home' | 'services';
}

const Logo = ({ size = "md", onClick }: { size?: string, onClick?: () => void }) => {
  const isSmall = size === "sm";
  return (
    <div className="flex items-center gap-5 group cursor-pointer" onClick={onClick}>
      <div className={`relative flex items-center justify-center rounded-2xl border border-[#64FFDA]/30 bg-[#0A192F] shadow-[0_0_30px_rgba(100,255,218,0.15)] transition-all duration-700 group-hover:scale-110 group-hover:border-[#64FFDA] ${isSmall ? 'w-10 h-10' : 'w-14 h-14'}`}>
        <div className="flex items-center gap-[3px]">
          <div className="w-1.5 h-4 bg-[#64FFDA] rounded-sm"></div>
          <div className="w-3.5 h-5 bg-white rounded-sm"></div>
          <div className="w-1.5 h-4 bg-[#64FFDA] rounded-sm"></div>
        </div>
      </div>
      
      <div className="flex flex-col leading-none">
        <span className={`font-black tracking-tighter ${isSmall ? 'text-base' : 'text-2xl'} text-white`}>
          CONNECTCARE <span className="text-[#64FFDA] lowercase font-medium">services</span>
        </span>
        <span className={`font-black tracking-[0.3em] ${isSmall ? 'text-[7px]' : 'text-[10px]'} text-slate-500 uppercase mt-1`}>
          Quantum Recruitment Hub
        </span>
      </div>
    </div>
  );
};

const Header: React.FC<{ onHireClick?: () => void, onNavigate?: (target: 'home' | 'services') => void }> = ({ onHireClick, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (target: 'home' | 'services') => {
    onNavigate?.(target);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-2xl border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo size={scrolled ? "sm" : "md"} onClick={() => handleNav('home')} />
        <nav className="hidden lg:flex items-center gap-12">
          <button onClick={() => handleNav('home')} className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-[#64FFDA] transition-colors cursor-pointer relative group">
            Home
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#64FFDA] group-hover:w-full transition-all"></span>
          </button>
          <button onClick={() => handleNav('services')} className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-[#64FFDA] transition-colors cursor-pointer relative group">
            Services
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#64FFDA] group-hover:w-full transition-all"></span>
          </button>
          <button 
            onClick={onHireClick}
            className="bg-[#64FFDA] text-[#020617] px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(100,255,218,0.2)] hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all active:scale-95 cursor-pointer"
          >
            Hire Talent
          </button>
        </nav>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-3 cursor-pointer w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all" 
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-xl`}></i>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#020617]/98 backdrop-blur-3xl z-50 p-12 flex flex-col items-center justify-center gap-12 animate-in fade-in duration-500">
           <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-10 right-10 text-white text-4xl hover:text-[#64FFDA]"><i className="fas fa-times"></i></button>
           <button onClick={() => handleNav('home')} className="text-4xl font-black uppercase tracking-widest text-white hover:text-[#64FFDA] transition-all">Home</button>
           <button onClick={() => handleNav('services')} className="text-4xl font-black uppercase tracking-widest text-white hover:text-[#64FFDA] transition-all">Services</button>
           <button onClick={() => { onHireClick?.(); setIsMobileMenuOpen(false); }} className="bg-[#64FFDA] text-[#020617] px-16 py-8 rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-lg shadow-2xl">
            Hire Talent Now
          </button>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC<{ onAction?: (t: 'Employer' | 'Candidate' | 'General') => void, onNavigate?: (target: 'home' | 'services') => void }> = ({ onAction, onNavigate }) => {
  return (
    <footer className="bg-[#020617] text-slate-500 py-32 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 text-center lg:text-left">
        <div className="grid lg:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 flex flex-col items-center lg:items-start">
            <Logo size="sm" onClick={() => onNavigate?.('home')} />
            <p className="mt-10 text-base leading-relaxed max-w-xs text-slate-400 font-medium">
              Revolutionizing global recruitment through quantum efficiency. Deploying elite talent hubs for the world's fastest firms.
            </p>
          </div>
          <div>
             <h4 className="text-white font-black mb-10 uppercase tracking-[0.4em] text-[11px]">Staffing Verticals</h4>
             <ul className="space-y-5 text-sm font-bold">
               {['Software Engineering', 'Solar & Renewables', 'AI Voice Solutions', 'Executive Search'].map(item => (
                 <li key={item}><button onClick={() => onAction?.('Employer')} className="hover:text-[#64FFDA] transition-colors">{item}</button></li>
               ))}
             </ul>
          </div>
          <div>
             <h4 className="text-white font-black mb-10 uppercase tracking-[0.4em] text-[11px]">Nexus Hub</h4>
             <ul className="space-y-5 text-sm font-bold">
               <li><button onClick={() => onNavigate?.('home')} className="hover:text-[#64FFDA] transition-colors">Home</button></li>
               <li><button onClick={() => onNavigate?.('services')} className="hover:text-[#64FFDA] transition-colors">Verticals Hub</button></li>
               <li><button className="hover:text-[#64FFDA] transition-colors">Compliance Protocol</button></li>
               <li><button className="hover:text-[#64FFDA] transition-colors">Data Privacy</button></li>
             </ul>
          </div>
          <div>
             <h4 className="text-white font-black mb-10 uppercase tracking-[0.4em] text-[11px]">Global Access</h4>
             <div className="space-y-5 text-sm font-bold">
               <p className="flex items-center gap-4 justify-center lg:justify-start"><i className="fas fa-envelope text-[#64FFDA]"></i> connectcare206@gmail.com</p>
               <p className="flex items-center gap-4 justify-center lg:justify-start"><i className="fas fa-phone text-[#64FFDA]"></i> +91 8460335032</p>
               <div className="flex gap-6 mt-10 justify-center lg:justify-start">
                 <a href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:border-[#64FFDA] hover:text-[#64FFDA] transition-all bg-white/5"><i className="fab fa-linkedin-in text-lg"></i></a>
                 <a href="https://wa.me/918460335032" target="_blank" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:border-green-400 hover:text-green-400 transition-all bg-white/5"><i className="fab fa-whatsapp text-lg"></i></a>
               </div>
             </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between text-[11px] font-black uppercase tracking-[0.3em]">
          <p>&copy; 2025 Connectcare Services Group. All rights reserved.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <button className="hover:text-[#64FFDA]">Privacy Infrastructure</button>
            <button className="hover:text-[#64FFDA]">Service Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children, onActionTrigger, onNavigate, currentView }) => (
  <div className="min-h-screen relative">
    <Header onHireClick={() => onActionTrigger?.('Employer')} onNavigate={onNavigate} />
    <main className="relative z-10">{children}</main>
    <Footer onAction={onActionTrigger} onNavigate={onNavigate} />
  </div>
);
