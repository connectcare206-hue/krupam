
import React, { useState, useEffect } from 'react';

export const AICostCalculator: React.FC = () => {
  const [hires, setHires] = useState(1);
  const [exp, setExp] = useState('1-3');
  const [localCost, setLocalCost] = useState(15); // Avg hourly
  const [nexusCost, setNexusCost] = useState(5);  // Avg hourly
  
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [percentReduction, setPercentReduction] = useState(0);

  useEffect(() => {
    // 160 hours per month standard
    const hoursPerMonth = 160;
    const localMonthly = localCost * hoursPerMonth * hires;
    const nexusMonthly = nexusCost * hoursPerMonth * hires;
    
    const monthly = localMonthly - nexusMonthly;
    setMonthlySavings(monthly);
    setAnnualSavings(monthly * 12);
    setPercentReduction(((localMonthly - nexusMonthly) / localMonthly) * 100);
  }, [hires, exp, localCost, nexusCost]);

  return (
    <section id="calculator" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Savings Analysis</h2>
            <h3 className="text-4xl font-bold mb-4 text-white">Interactive ROI Calculator</h3>
            <p className="text-slate-400">See the real-world impact of switching to a Connectcare recruitment model.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 bg-slate-800/50 p-8 md:p-12 rounded-[2.5rem] border border-slate-700 backdrop-blur-sm">
            {/* Inputs */}
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Number of Hires</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" min="1" max="20" value={hires}
                    onChange={(e) => setHires(parseInt(e.target.value))}
                    className="flex-grow accent-blue-500"
                  />
                  <span className="text-2xl font-bold w-12 text-center">{hires}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Experience Level</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => { setExp('1-3'); setNexusCost(5); }}
                    className={`py-3 rounded-xl font-bold border-2 transition-all ${exp === '1-3' ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-500'}`}
                  >
                    1–3 Years
                  </button>
                  <button 
                    onClick={() => { setExp('3-7'); setNexusCost(8); }}
                    className={`py-3 rounded-xl font-bold border-2 transition-all ${exp === '3-7' ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-500'}`}
                  >
                    3–7 Years
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Local Agency ($/hr)</label>
                  <input 
                    type="number" value={localCost}
                    onChange={(e) => setLocalCost(parseInt(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Connectcare ($/hr)</label>
                  <div className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-blue-400 font-bold">
                    ${nexusCost}
                  </div>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div className="bg-slate-900 rounded-3xl p-8 flex flex-col justify-between border border-slate-800">
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-1">Potential Monthly Savings</p>
                  <p className="text-5xl font-extrabold text-blue-500 tracking-tight">
                    ${monthlySavings.toLocaleString()}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-1">Annual ROI</p>
                  <p className="text-4xl font-bold text-white">
                    ${annualSavings.toLocaleString()}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">Cost Reduction</span>
                    <span className="text-green-400 font-bold text-xl">{percentReduction.toFixed(0)}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-green-400 transition-all duration-1000" style={{ width: `${percentReduction}%` }}></div>
                  </div>
                </div>
              </div>

              <a href="#contact" className="mt-8 block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-xl transition-all active:scale-95">
                Lock In These Savings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
