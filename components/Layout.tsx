import React, { useState, useEffect } from 'react';

const Logo = ({ inverted = false, size = "md" }) => {
  const isSmall = size === "sm";
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className={`relative flex items-center justify-center rounded-full border-[3px] shadow-xl transition-all duration-500 group-hover:scale-105 ${inverted ? 'bg-blue-600 border-slate-700' : 'bg-blue-600 border-slate-200'} ${isSmall ? 'w-10 h-10 border-[2px]' : 'w-14 h-14'}`}>
        <div className="absolute inset-0 rounded-full border-b-[4px] border-black/20"></div>
        <div className="flex items-center gap-[2px]">
          <div className="w-1.5 h-3 bg-white rounded-sm"></div>
          <div className="w-3 h-4 bg-white rounded-md flex items-center justify-center">
            <div className="w-[1px] h-2 bg-blue-600"></div>
          </div>
          <div className="w-1.5 h-3 bg-white rounded-sm"></div>
        </div>
      </div>
      
      <div className="flex flex-col leading-tight">
        <span className={`font-extrabold tracking-tight ${isSmall ? 'text-sm' : 'text-xl'} ${inverted ? 'text-white' : 'text-slate-900'}`}>
          Connectcare <span className="text-blue-600 lowercase">services</span>
        </span>
        <span className={`italic font-bold tracking-tight ${isSmall ? 'text-[7px]' : 'text-[9px]'} ${inverted ? 'text-slate-400' : 'text-slate-500'}`}>
          Your Satisfaction, Our Commitment
        </span>
      </div>
    </div>
  );
};

const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/918460335032" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-28 right-8 z-[100] w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-3xl hover:scale-110 transition-all animate-bounce"
    aria-label="Contact us on WhatsApp"
  >
    <i className="fab fa-whatsapp text-3xl"></i>
  </a>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-2 border-b border-slate-100' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#"><Logo size={scrolled ? "sm" : "md"} /></a>
        <nav className="hidden lg:flex items-center gap-8">
          {['About', 'Services', 'Process', 'Calculator'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="bg-slate-900 text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl active:scale-95">
            Hire Talent
          </a>
        </nav>
        <button className="lg:hidden text-slate-900 p-2" aria-label="Menu">
          <i className="fas fa-bars-staggered text-xl"></i>
        </button>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-24 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1">
          <Logo inverted size="sm" />
          <p className="mt-8 text-sm leading-relaxed max-w-xs">
            The premier global recruitment firm specialized in contractual staffing for IT, AI, Pharma, Solar, and Real Estate. Direct talent finalization with 70% cost savings.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><i className="fab fa-linkedin-in text-lg"></i></a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><i className="fab fa-facebook-f text-lg"></i></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px]">Staffing Hubs</h4>
          <ul className="space-y-4 text-xs font-bold">
            <li><a href="#services" className="hover:text-blue-400 transition-colors">IT & AI Developers</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">Solar & Real Estate</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">Healthcare & Pharma</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">Finance & Accounting</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px]">Quick Navigation</h4>
          <ul className="space-y-4 text-xs font-bold">
            <li><a href="#about" className="hover:text-blue-400 transition-colors">Our Approach</a></li>
            <li><a href="#process" className="hover:text-blue-400 transition-colors">Hiring Process</a></li>
            <li><a href="#calculator" className="hover:text-blue-400 transition-colors">Savings Estimator</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Post Job Requirement</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px]">Headquarters</h4>
          <ul className="space-y-6 text-xs font-bold">
            <li className="flex items-start gap-3"><i className="fas fa-location-dot text-blue-500 mt-1"></i> Global Recruitment Hub, India</li>
            <li className="flex items-start gap-3"><i className="fas fa-envelope text-blue-500 mt-1"></i> connectcare206@gmail.com</li>
            <li className="flex items-start gap-3"><i className="fas fa-phone text-blue-500 mt-1"></i> +91 8460335032</li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row gap-6 justify-between text-[10px] font-black uppercase tracking-[0.2em]">
        <p>&copy; 2025 Connectcare Services. All rights reserved. ISO 9001:2015 Recruitment Firm.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">Privacy Shield</a>
          <a href="#" className="hover:text-white transition-colors">Legal Terms</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-white">
    <Header />
    <main className="flex-grow">{children}</main>
    <FloatingWhatsApp />
    <Footer />
  </div>
);