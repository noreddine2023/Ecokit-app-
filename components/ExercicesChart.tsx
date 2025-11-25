import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceDot, Label } from 'recharts';
import { MarketParams } from '../types';
import { generateEconChartData } from '../utils/economics';

export const ExercicesChart: React.FC = () => {
  // Exercise Params: Qd = 200 - 4P, Qo = 50 + 2P
  // Equilibrium: 200-4P = 50+2P => 150 = 6P => P=25, Q=100
  const params: MarketParams = {
    demandIntercept: 200,
    demandSlope: 4,
    supplyIntercept: 50,
    supplySlope: 2 // note: supply slope here acts as the 'd' in c + dP from utils
  };

  const equilibriumPrice = 25;
  const equilibriumQuantity = 100;
  
  // Generate data
  const data = generateEconChartData(params, equilibriumQuantity);

  return (
    <div className="h-[450px] w-full bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden">
      
      {/* Chart Title */}
      <div className="absolute top-6 left-8 z-10 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-slate-900 font-bold text-lg leading-tight">Cas Pratique #1</h3>
        <p className="text-slate-500 text-xs mt-1">Marché des Smartphones</p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 40, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          
          <XAxis 
            dataKey="quantity" 
            type="number" 
            domain={[0, 200]}
            label={{ value: 'Quantité (milliers)', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
          />
          <YAxis 
            label={{ value: 'Prix (€)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
            domain={[0, 50]}
          />
          <Tooltip 
             contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
             labelStyle={{ color: '#64748b', fontWeight: 'bold' }}
             formatter={(value: number, name: string) => [value, name === 'demandPrice' ? 'Prix Demande' : 'Prix Offre']}
             labelFormatter={(label) => `Q = ${label}`}
          />

          <Line 
            type="monotone" 
            dataKey="demandPrice" 
            stroke="#334155" 
            strokeWidth={3} 
            dot={false} 
            name="Demande" 
          />
          <Line 
            type="monotone" 
            dataKey="supplyPrice" 
            stroke="#64748b" 
            strokeWidth={3} 
            strokeDasharray="5 5"
            dot={false} 
            name="Offre" 
          />

          {/* Equilibrium Point */}
          <ReferenceDot x={equilibriumQuantity} y={equilibriumPrice} r={6} fill="#0f172a" stroke="white" strokeWidth={2} />
          
          {/* Guide Lines */}
          <ReferenceLine x={equilibriumQuantity} stroke="#cbd5e1" strokeDasharray="3 3" />
          <ReferenceLine y={equilibriumPrice} stroke="#cbd5e1" strokeDasharray="3 3">
             <Label value="Pe = 25" position="left" fill="#0f172a" fontWeight="bold" fontSize={12}/>
          </ReferenceLine>

        </LineChart>
      </ResponsiveContainer>

      {/* Mini Legend Overlay */}
      <div className="absolute bottom-4 right-6 bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-slate-100 shadow-sm flex flex-col gap-2 pointer-events-none">
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-slate-700 rounded-full"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Demande (D)</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-slate-400 border-b border-slate-400 border-dashed"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Offre (O)</span>
         </div>
      </div>
    </div>
  );
};