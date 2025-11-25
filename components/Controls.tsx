import React from 'react';
import { MarketParams } from '../types';
import { RotateCcw, Settings2 } from 'lucide-react';

interface ControlsProps {
  params: MarketParams;
  setParams: React.Dispatch<React.SetStateAction<MarketParams>>;
}

export const Controls: React.FC<ControlsProps> = ({ params, setParams }) => {
  
  const handleReset = () => {
    setParams({
      demandIntercept: 100,
      demandSlope: 5,
      supplyIntercept: 20,
      supplySlope: 3
    });
  };

  const handleChange = (key: keyof MarketParams, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setParams(prev => ({ ...prev, [key]: numValue }));
    }
  };

  const InputGroup = ({ 
    label, 
    value, 
    min, 
    max, 
    onChange, 
    colorClass 
  }: { 
    label: string, 
    value: number, 
    min: number, 
    max: number, 
    onChange: (val: string) => void, 
    colorClass: string 
  }) => (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <label className={`text-xs font-semibold uppercase tracking-wider ${colorClass}`}>{label}</label>
        <span className="text-xs font-mono bg-white/10 px-2 py-0.5 rounded text-white">{value}</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-white hover:accent-cyan-300 transition-all"
      />
    </div>
  );

  return (
    <div className="backdrop-blur-xl bg-slate-900/60 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-white/5">
        <div className="flex items-center gap-2 text-white">
          <Settings2 size={18} />
          <h3 className="font-bold text-sm uppercase tracking-wide">Paramètres</h3>
        </div>
        <button 
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full"
        >
          <RotateCcw size={14} /> Reset
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* Demand Controls */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
             <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
             <h4 className="text-sm font-bold text-cyan-200">Demande (D)</h4>
          </div>
          <div className="bg-cyan-500/10 rounded-xl p-4 space-y-4 border border-cyan-500/20">
            <InputGroup 
              label="Intercepte" 
              value={params.demandIntercept} 
              min={50} 
              max={200} 
              onChange={(v) => handleChange('demandIntercept', v)} 
              colorClass="text-cyan-400"
            />
            <InputGroup 
              label="Pente" 
              value={params.demandSlope} 
              min={1} 
              max={15} 
              onChange={(v) => handleChange('demandSlope', v)} 
              colorClass="text-cyan-400"
            />
          </div>
        </div>

        {/* Supply Controls */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
             <div className="w-2 h-2 rounded-full bg-fuchsia-400"></div>
             <h4 className="text-sm font-bold text-fuchsia-200">Offre (O)</h4>
          </div>
          <div className="bg-fuchsia-500/10 rounded-xl p-4 space-y-4 border border-fuchsia-500/20">
            <InputGroup 
              label="Intercepte" 
              value={params.supplyIntercept} 
              min={0} 
              max={100} 
              onChange={(v) => handleChange('supplyIntercept', v)} 
              colorClass="text-fuchsia-400"
            />
            <InputGroup 
              label="Pente" 
              value={params.supplySlope} 
              min={1} 
              max={15} 
              onChange={(v) => handleChange('supplySlope', v)} 
              colorClass="text-fuchsia-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};