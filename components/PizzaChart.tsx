import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceDot } from 'recharts';

export const PizzaChart: React.FC = () => {
  // Data from Exercise 10 Table
  // X: Parts, UT: Total Utility, Um: Marginal Utility
  const data = [
    { x: 0, ut: 0, um: 0 },
    { x: 1, ut: 15, um: 15 },
    { x: 2, ut: 27, um: 12 },
    { x: 3, ut: 36, um: 9 },
    { x: 4, ut: 42, um: 6 },
    { x: 5, ut: 45, um: 3 },
    { x: 6, ut: 45, um: 0 }, // Saturation Point
    { x: 7, ut: 40, um: -5 }, // Disutility
  ];

  return (
    <div className="h-[500px] w-full bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden">
      
      {/* Chart Title */}
      <div className="absolute top-6 left-8 z-10 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-slate-900 font-bold text-lg leading-tight">Utilité : Pizza</h3>
        <p className="text-slate-500 text-xs mt-1">Parts de Pizza (X)</p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 40, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          
          <XAxis 
            dataKey="x" 
            type="number" 
            domain={[0, 8]}
            tickCount={9}
            label={{ value: 'Parts Mangées (X)', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
          />
          <YAxis 
            label={{ value: 'Satisfaction (Utils)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
            domain={[-10, 50]}
          />
          <Tooltip 
             contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
             labelStyle={{ color: '#64748b', fontWeight: 'bold' }}
             formatter={(value: number, name: string) => [value, name === 'ut' ? 'Utilité Totale' : 'Utilité Marginale']}
             labelFormatter={(label) => `Part n° ${label}`}
          />

          <ReferenceLine y={0} stroke="#cbd5e1" strokeWidth={2} />

          {/* Marginal Utility Bar */}
          <Bar 
            dataKey="um" 
            fill="#ef4444" 
            fillOpacity={0.7}
            radius={[4, 4, 0, 0]}
            name="Utilité Marginale" 
            barSize={20}
          />

          {/* Total Utility Curve */}
          <Line 
            type="monotone" 
            dataKey="ut" 
            stroke="#f59e0b" 
            strokeWidth={4} 
            dot={{ r: 4, fill: "#f59e0b", strokeWidth: 2, stroke: "#fff" }}
            activeDot={{ r: 6 }}
            name="Utilité Totale" 
          />

          {/* Saturation Point Annotation */}
          <ReferenceDot x={6} y={45} r={6} fill="#10b981" stroke="white" strokeWidth={2} />
          <ReferenceLine x={6} stroke="#10b981" strokeDasharray="3 3" label={{ value: 'Satiété', position: 'top', fill: '#10b981', fontSize: 10 }} />

        </ComposedChart>
      </ResponsiveContainer>

      {/* Mini Legend Overlay */}
      <div className="absolute bottom-4 right-6 bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-slate-100 shadow-sm flex flex-col gap-2 pointer-events-none">
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-amber-500 rounded-full"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">UT (Plaisir Cumulé)</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-sm opacity-70"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Um (Plaisir par part)</span>
         </div>
      </div>
    </div>
  );
};