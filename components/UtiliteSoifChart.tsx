import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceDot } from 'recharts';

export const UtiliteSoifChart: React.FC = () => {
  // Data from Exercise 9 Table
  const data = [
    { q: 0, ut: 0, um: 0 },
    { q: 1, ut: 20, um: 20 },
    { q: 2, ut: 35, um: 15 },
    { q: 3, ut: 45, um: 10 },
    { q: 4, ut: 50, um: 5 },
    { q: 5, ut: 50, um: 0 }, // Saturation Point
  ];

  return (
    <div className="h-[500px] w-full bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden">
      
      {/* Chart Title */}
      <div className="absolute top-6 left-8 z-10 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-slate-900 font-bold text-lg leading-tight">Évolution de l'Utilité</h3>
        <p className="text-slate-500 text-xs mt-1">Samir et la Limonade</p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 40, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          
          <XAxis 
            dataKey="q" 
            type="number" 
            domain={[0, 6]}
            tickCount={7}
            label={{ value: 'Verres (Q)', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
          />
          <YAxis 
            label={{ value: 'Niveau (Utils)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
            domain={[0, 60]}
          />
          <Tooltip 
             contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
             labelStyle={{ color: '#64748b', fontWeight: 'bold' }}
             formatter={(value: number, name: string) => [value, name === 'ut' ? 'Utilité Totale' : 'Utilité Marginale']}
             labelFormatter={(label) => `Verre n° ${label}`}
          />

          <ReferenceLine y={0} stroke="#cbd5e1" strokeWidth={2} />

          {/* Marginal Utility Bar */}
          <Bar 
            dataKey="um" 
            fill="#f59e0b" 
            fillOpacity={0.6}
            radius={[4, 4, 0, 0]}
            name="Utilité Marginale" 
            barSize={24}
          />

          {/* Total Utility Curve */}
          <Line 
            type="monotone" 
            dataKey="ut" 
            stroke="#4f46e5" 
            strokeWidth={4} 
            dot={{ r: 4, fill: "#4f46e5", strokeWidth: 2, stroke: "#fff" }}
            activeDot={{ r: 6 }}
            name="Utilité Totale" 
          />

          {/* Saturation Point Annotation */}
          <ReferenceDot x={5} y={50} r={6} fill="#ef4444" stroke="white" strokeWidth={2} />
          <ReferenceLine x={5} stroke="#ef4444" strokeDasharray="3 3" />

        </ComposedChart>
      </ResponsiveContainer>

      {/* Mini Legend Overlay */}
      <div className="absolute bottom-4 right-6 bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-slate-100 shadow-sm flex flex-col gap-2 pointer-events-none">
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-indigo-600 rounded-full"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">UT (Totale)</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-400 rounded-sm opacity-60"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Um (Marginale)</span>
         </div>
      </div>
    </div>
  );
};