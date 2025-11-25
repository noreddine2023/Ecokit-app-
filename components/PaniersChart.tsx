import React from 'react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, ReferenceLine, Label, Area } from 'recharts';

export const PaniersChart: React.FC = () => {
  // Budget Constraint: 4X + 2Y = 30
  // Y = (30 - 4X) / 2 = 15 - 2X
  
  const generateBudgetLine = () => {
    const data = [];
    for (let x = 0; x <= 8; x += 0.5) {
      const y = 15 - 2 * x;
      if (y >= 0) {
        data.push({ x, y });
      }
    }
    return data;
  };

  const data = generateBudgetLine();

  // Baskets
  const baskets = [
    { name: 'A', x: 5, y: 5, cost: 30, status: 'Accessible (Saturé)', color: '#10b981' }, // Green
    { name: 'B', x: 2, y: 10, cost: 28, status: 'Accessible (Épargne)', color: '#3b82f6' }, // Blue
    { name: 'C', x: 8, y: 0, cost: 32, status: 'Inaccessible', color: '#ef4444' }, // Red
  ];

  return (
    <div className="h-[500px] w-full bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden">
      
      {/* Chart Title */}
      <div className="absolute top-6 left-8 z-10 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-slate-900 font-bold text-lg leading-tight">Carte des Choix</h3>
        <p className="text-slate-500 text-xs mt-1">Budget = 30 DH</p>
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
            label={{ value: 'Pommes (X)', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
          />
          <YAxis 
            label={{ value: 'Bananes (Y)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
            domain={[0, 16]}
          />
          <Tooltip 
             contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
             labelStyle={{ color: '#64748b', fontWeight: 'bold' }}
             formatter={(value: number) => [value, 'Quantité']}
             labelFormatter={() => ''}
          />

          {/* Budget Line Area */}
          <Area type="monotone" dataKey="y" stroke="none" fill="#ecfdf5" fillOpacity={0.6} />
          
          {/* Budget Line */}
          <Line 
            type="monotone" 
            dataKey="y" 
            stroke="#059669" 
            strokeWidth={3} 
            dot={false}
            name="Droite de Budget" 
          />

          {/* Baskets Points */}
          {baskets.map((basket) => (
            <React.Fragment key={basket.name}>
              <ReferenceDot 
                x={basket.x} 
                y={basket.y} 
                r={6} 
                fill={basket.color} 
                stroke="white" 
                strokeWidth={2} 
              />
              <ReferenceDot x={basket.x} y={basket.y} r={0}>
                <Label 
                  value={`${basket.name}`} 
                  position="top" 
                  offset={10} 
                  fontWeight="900" 
                  fill={basket.color} 
                  fontSize={14}
                />
              </ReferenceDot>
            </React.Fragment>
          ))}

        </ComposedChart>
      </ResponsiveContainer>

      {/* Mini Legend Overlay */}
      <div className="absolute bottom-4 right-6 bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-slate-100 shadow-sm flex flex-col gap-2 pointer-events-none">
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-emerald-600 rounded-full"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Frontière (Budget)</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Zone Accessible</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Zone Inaccessible</span>
         </div>
      </div>
    </div>
  );
};