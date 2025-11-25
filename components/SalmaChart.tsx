import React from 'react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, ReferenceLine, Label } from 'recharts';

export const SalmaChart: React.FC = () => {
  // Indifference Curve: U = xy = 16 => y = 16/x
  const generateData = () => {
    const data = [];
    // Avoid x=0
    for (let x = 0.5; x <= 12; x += 0.25) {
      data.push({ x: x, y: 16 / x });
    }
    return data;
  };

  const data = generateData();
  const point = { x: 2, y: 8 };

  return (
    <div className="h-[500px] w-full bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden">
      
      {/* Chart Title */}
      <div className="absolute top-6 left-8 z-10 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-slate-900 font-bold text-lg leading-tight">Carte d'Indifférence</h3>
        <p className="text-slate-500 text-xs mt-1">Niveau d'utilité U = 16</p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 40, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          
          <XAxis 
            dataKey="x" 
            type="number" 
            domain={[0, 10]}
            tickCount={11}
            label={{ value: 'Cafés (X)', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
          />
          <YAxis 
            label={{ value: 'Croissants (Y)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
            domain={[0, 16]}
          />
          <Tooltip 
             contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
             labelStyle={{ color: '#64748b', fontWeight: 'bold' }}
             formatter={(value: number) => [value.toFixed(2), 'Quantité']}
             labelFormatter={(label) => `X = ${label}`}
          />

          {/* Indifference Curve */}
          <Line 
            type="monotone" 
            dataKey="y" 
            stroke="#db2777" 
            strokeWidth={3} 
            dot={false}
            name="U = 16" 
          />

          {/* Point of Interest (2, 8) */}
          <ReferenceDot x={point.x} y={point.y} r={6} fill="#4f46e5" stroke="white" strokeWidth={2} />
          <ReferenceLine x={point.x} stroke="#cbd5e1" strokeDasharray="3 3" />
          <ReferenceLine y={point.y} stroke="#cbd5e1" strokeDasharray="3 3" />
          <ReferenceDot x={point.x} y={point.y} r={0}>
             <Label value="A (2, 8)" position="top" offset={10} fontWeight="bold" fill="#4f46e5" fontSize={12} />
          </ReferenceDot>

          {/* Visualizing TMS = 4 (Slope = -4) */}
          {/* Line from (2, 8) to (3, 4) shows trade-off: +1 X, -4 Y */}
          <ReferenceLine 
             segment={[{ x: 2, y: 8 }, { x: 3, y: 4 }]} 
             stroke="#f59e0b" 
             strokeWidth={2}
             strokeDasharray="4 4"
          >
             <Label value="TMS = 4" position="right" fill="#f59e0b" fontSize={11} fontWeight="bold" />
          </ReferenceLine>

          <ReferenceDot x={3} y={4} r={4} fill="#f59e0b" stroke="none" opacity={0.5} />

        </ComposedChart>
      </ResponsiveContainer>

      {/* Mini Legend Overlay */}
      <div className="absolute bottom-4 right-6 bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-slate-100 shadow-sm flex flex-col gap-2 pointer-events-none">
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-pink-600 rounded-full"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Courbe Iso-satisfaction</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-amber-500 border-b border-amber-500 border-dashed"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Pente (TMS)</span>
         </div>
      </div>
    </div>
  );
};