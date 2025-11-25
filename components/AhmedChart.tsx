import React from 'react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, Label, ReferenceLine } from 'recharts';

export const AhmedChart: React.FC = () => {
  const data = [
    { x: 1, y: 13, name: 'A' },
    { x: 2, y: 9, name: 'B' },
    { x: 3, y: 6, name: 'C' },
    { x: 4, y: 4, name: 'D' },
  ];

  // Comparison point E
  const pointE = { x: 3, y: 8, name: 'E' };

  return (
    <div className="h-[500px] w-full bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden">
      
      {/* Chart Title */}
      <div className="absolute top-6 left-8 z-10 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-slate-900 font-bold text-lg leading-tight">Préférences d'Ahmed</h3>
        <p className="text-slate-500 text-xs mt-1">Sandwichs (X) vs Jus (Y)</p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 40, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          
          <XAxis 
            type="number" 
            dataKey="x" 
            domain={[0, 5]} 
            tickCount={6} 
            label={{ value: 'Sandwichs (X)', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }} 
            axisLine={{ stroke: '#cbd5e1' }} 
            tickLine={false} 
          />
          <YAxis 
            type="number" 
            domain={[0, 15]} 
            tickCount={6} 
            label={{ value: 'Jus (Y)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }} 
            axisLine={{ stroke: '#cbd5e1' }} 
            tickLine={false} 
          />
          <Tooltip 
             contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} 
             labelStyle={{ color: '#64748b', fontWeight: 'bold' }} 
             formatter={(value: number) => [value, 'Quantité']} 
             labelFormatter={() => ''} 
          />
          
          <Line 
            type="monotone" 
            dataKey="y" 
            stroke="#0ea5e9" 
            strokeWidth={3} 
            dot={{ r: 5, fill: "#0ea5e9", stroke: "white", strokeWidth: 2 }} 
            name="Courbe Indifférence" 
          />

          {data.map((p) => (
             <ReferenceDot key={p.name} x={p.x} y={p.y} r={0}>
               <Label value={p.name} position="top" offset={10} fontWeight="bold" fill="#0f172a" />
             </ReferenceDot>
          ))}

          {/* TMS A->B Visualization (-4Y, +1X) */}
          <ReferenceLine segment={[{ x: 1, y: 13 }, { x: 1, y: 9 }]} stroke="#ef4444" strokeWidth={2} strokeDasharray="4 4">
             <Label value="-4" position="left" fill="#ef4444" fontSize={12} fontWeight="bold" />
          </ReferenceLine>
          <ReferenceLine segment={[{ x: 1, y: 9 }, { x: 2, y: 9 }]} stroke="#10b981" strokeWidth={2} strokeDasharray="4 4">
             <Label value="+1" position="bottom" fill="#10b981" fontSize={12} fontWeight="bold" />
          </ReferenceLine>

          {/* TMS B->C Visualization (-3Y, +1X) */}
          <ReferenceLine segment={[{ x: 2, y: 9 }, { x: 2, y: 6 }]} stroke="#ef4444" strokeWidth={2} strokeDasharray="4 4" opacity={0.5}/>
          <ReferenceLine segment={[{ x: 2, y: 6 }, { x: 3, y: 6 }]} stroke="#10b981" strokeWidth={2} strokeDasharray="4 4" opacity={0.5}/>

          {/* Point E (Preferred) */}
          <ReferenceDot x={pointE.x} y={pointE.y} r={6} fill="#f59e0b" stroke="white" strokeWidth={2} />
          <ReferenceDot x={pointE.x} y={pointE.y} r={0}>
             <Label value="E" position="top" offset={10} fontWeight="bold" fill="#f59e0b" />
          </ReferenceDot>

        </ComposedChart>
      </ResponsiveContainer>

      {/* Mini Legend Overlay */}
      <div className="absolute bottom-4 right-6 bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-slate-100 shadow-sm flex flex-col gap-2 pointer-events-none">
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-sky-500 rounded-full"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Courbe d'Indifférence</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Panier E (Préféré)</span>
         </div>
      </div>
    </div>
  );
};