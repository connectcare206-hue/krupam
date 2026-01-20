
import React, { useState, useEffect } from 'react';
import { getCostComparison } from '../services/geminiService';

export const AICostCalculator: React.FC<{ onSavingsClaimed?: () => void }> = ({ onSavingsClaimed }) => {
  const [hires, setHires] = useState(1);
  const [role, setRole] = useState('Senior Developer');
  const [localCost, setLocalCost] = useState(15); 
  const [nexusCost, setNexusCost] = useState(7.5);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    // Adjusted reduction factor to 0.5 to match the requested $7.5 nexus rate for a $15 local rate.
    const reductionFactor = 0.5; 
    setNexusCost(parseFloat((localCost * reductionFactor).toFixed(1)));
  }, [localCost]);

  const runAiAnalysis = async () => {
    if (!role.trim()) return;
    setIsAnalyzing(true);
    const data = await getCostComparison(role, 'Global Standard');
    if (data) {
      const val = parseInt(data.localAvg.replace(/[^0-9]/g, '')) || 15;
      setLocalCost(val);
    }
    setIsAnalyzing(false);
  };

  const monthlySavings = (localCost - nexusCost) * 160 * hires;

  return (
    <section id="calculator" className="py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#64FFDA] text-[11px] font-black uppercase tracking-[0.7em] mb-4">ROI Efficiency Hub</h2>
            <h3 className="text-5xl font-black mb-4 text-white tracking-tighter">50% Leaner Operations.</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 bg-slate-800/20 p-8 md:p-16 rounded-[4rem] border border-white/5 backdrop-blur-3xl">
            <div className="space-y-10">
              <div className="space-y-4">
                <label className="block text-[10px] font-black text-[#64FFDA] uppercase tracking-[0.3em]">Specialized Role</label>
                <div className="flex gap-3">
                  <input type="text" value={role} onChange={e => setRole(e.target.value)} className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none font-bold text-white" placeholder="e.g. AI Specialist"/>
                  <button onClick={runAiAnalysis} className="bg-[#64FFDA]/10 border border-[#64FFDA]/30 px-6 rounded-2xl"><i className="fas fa-microchip text-[#64FFDA]"></i></button>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-[#64FFDA] uppercase tracking-[0.3em] mb-6">Staffing Scale: {hires} Hires</label>
                <input type="range" min="1" max="50" value={hires} onChange={e => setHires(parseInt(e.target.value))} className="w-full accent-[#64FFDA] h-1.5 bg-white/10 appearance-none cursor-pointer"/>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Standard Market ($/hr)</p>
                  <p className="text-2xl font-black text-white">${localCost}</p>
                </div>
                <div className="p-6 bg-[#64FFDA]/5 rounded-3xl border border-[#64FFDA]/10">
                  <p className="text-[10px] font-black text-[#64FFDA] uppercase tracking-widest mb-2">Nexus Rate ($/hr)</p>
                  <p className="text-2xl font-black text-[#64FFDA]">${nexusCost}</p>
                </div>
              </div>
            </div>
            <div className="bg-[#020617] rounded-[3.5rem] p-10 md:p-14 flex flex-col justify-between border border-white/5">
              <div className="space-y-10">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">Monthly Efficiency Gain</p>
                  <p className="text-6xl md:text-7xl font-black text-[#64FFDA] tracking-tighter">${monthlySavings.toLocaleString()}</p>
                </div>
                <div className="pt-10 border-t border-white/5">
                  <p className="text-slate-400 font-bold leading-relaxed">We don't just staff; we build your brand by optimizing your financial engine.</p>
                </div>
              </div>
              <button onClick={onSavingsClaimed} className="mt-14 bg-[#64FFDA] text-[#020617] py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px]">Secure This ROI</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
