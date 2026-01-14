
import React, { useState, useEffect } from 'react';

const Logo = ({ inverted = false }) => (
  <div className="flex items-center gap-3">
    <div className={`${inverted ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'} w-10 h-10 rounded-lg flex items-center justify-center shadow-lg`}>
      <i className="fas fa-plug-circle-check text-lg"></i>
    </div>
    <div className="flex flex-col leading-none">
      <span className={`text-xl font-bold tracking-tight ${inverted ? 'text-white' : 'text-slate-900'}`}>
        CONNECT<span className="text-blue-600">CARE</span>
      </span>
      <span className={`text-[9px] font-semibold tracking-[0.2em] uppercase mt-0.5 ${inverted ? 'text-slate-400' : 'text-slate-500'}`}>
        Services
      </span>
    </div>
  </div>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo inverted={scrolled} />
        <nav className="hidden lg:flex items-center gap-10">
          <a href="#about" className={`text-sm font-bold tracking-wide transition-colors ${scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-blue-600'}`}>About</a>
          <a href="#services" className={`text-sm font-bold tracking-wide transition-colors ${scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-blue-600'}`}>Services</a>
          <a href="#contact" className="bg-blue-600 text-white px-7 py-3 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 active:scale-95">Hire Global Talent</a>
        </nav>
        <button className={`lg:hidden ${scrolled ? 'text-white' : 'text-slate-900'}`}><i className="fas fa-bars text-xl"></i></button>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-24 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-16 mb-16">
        <div className="col-span-1">
          <Logo inverted />
          <p className="mt-8 text-sm leading-relaxed max-w-xs">
            A premium global recruitment partner specialized in contractual staffing for IT, AI, Pharma, and Accounting. 100% Client control, zero heavy margins.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px]">Industries</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><a href="#services" className="hover:text-blue-400 transition-colors">IT & Software Engineering</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">AI / ML & Data Science</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">Pharma Regulatory Affairs</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">Global Bookkeeping</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px]">Regions Served</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li className="flex items-center gap-2"><i className="fas fa-globe text-blue-500"></i> United States</li>
            <li className="flex items-center gap-2"><i className="fas fa-globe text-blue-500"></i> United Kingdom</li>
            <li className="flex items-center gap-2"><i className="fas fa-globe text-blue-500"></i> Canada</li>
            <li className="flex items-center gap-2"><i className="fas fa-globe text-blue-500"></i> Australia</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px]">Contact Info</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li className="flex items-start gap-3"><i className="fas fa-envelope text-blue-500 mt-1"></i> connectcare206@gmail.com</li>
            <li className="flex items-start gap-3"><i className="fas fa-phone text-blue-500 mt-1"></i> +91 8460335032</li>
            <li className="pt-4"><a href="#contact" className="text-blue-400 uppercase tracking-widest text-[10px] hover:text-white transition-all">Schedule Consultation</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:row gap-4 justify-between text-[10px] font-black uppercase tracking-widest">
        <p>&copy; 2025 Connectcare Services. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
