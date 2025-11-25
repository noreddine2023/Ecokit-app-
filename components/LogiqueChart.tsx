import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Label } from 'recharts';

export const LogiqueChart: React.FC = () => {
  // Generate data for two types of curves
  // 1. Convex (Cobb-Douglas type): Y = 10/X
  // 2. Linear (Perfect Substitutes): Y = 10 - X
  const generateData = () => {
    const data = [];
    for (let x = 1; x <= 9; x += 0.5) {
      data.push({
        x: x,
        yConvex: parseFloat((10 / x).toFixed(2)),
        yLinear: Math.max(0, 10 - x)
      });
    }
    return data;
  };

  const data = generateData();

  return (
    <div className="h-[500px] w-full bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden">
      
      {/* Chart Title */}
      <div className="absolute top-6 left-8 z-10 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-slate-900 font-bold text-lg leading-tight">Formes des Courbes</h3>
        <p className="text-slate-500 text-xs mt-1">Classique vs Substituts Parfaits</p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 40, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          
          <XAxis 
            dataKey="x" 
            type="number" 
            domain={[0, 10]}
            tickCount={11}
            label={{ value: 'Bien X (Bananes)', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
          />
          <YAxis 
            label={{ value: 'Bien Y (Pommes)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
            domain={[0, 12]}
          />
          <Tooltip 
             contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
             labelStyle={{ color: '#64748b', fontWeight: 'bold' }}
             formatter={(value: number, name: string) => [value, name === 'yConvex' ? 'Courbe Normale' : 'Substituts Parfaits']}
             labelFormatter={() => ''}
          />

          {/* Convex Curve (Normal) */}
          <Line 
            type="monotone" 
            dataKey="yConvex" 
            stroke="#0891b2" 
            strokeWidth={4} 
            dot={false}
            name="Normale (Convexe)" 
          />

          {/* Linear Curve (Substitutes) */}
          <Line 
            type="monotone" 
            dataKey="yLinear" 
            stroke="#94a3b8" 
            strokeWidth={3} 
            strokeDasharray="5 5"
            dot={false}
            name="Substituts (Droite)" 
          />

          {/* Annotations */}
          <ReferenceLine 
             segment={[{ x: 2, y: 5 }, { x: 3, y: 3.33 }]} 
             stroke="#0891b2" 
             strokeWidth={2}
          >
             <Label value="TMS Décroissant" position="right" fill="#0891b2" fontSize={10} fontWeight="bold" />
          </ReferenceLine>

          <ReferenceLine 
             segment={[{ x: 6, y: 4 }, { x: 8, y: 2 }]} 
             stroke="#64748b" 
             strokeWidth={2}
          >
             <Label value="TMS Constant" position="bottom" fill="#64748b" fontSize={10} fontWeight="bold" />
          </ReferenceLine>

        </LineChart>
      </ResponsiveContainer>

      {/* Mini Legend Overlay */}
      <div className="absolute bottom-4 right-6 bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-slate-100 shadow-sm flex flex-col gap-2 pointer-events-none">
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-cyan-600 rounded-full"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Préférences Normales</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-slate-400 border-b border-slate-400 border-dashed"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Substituts Parfaits (Q4)</span>
         </div>
      </div>
    </div>
  );
};