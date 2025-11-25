import React from 'react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, ReferenceLine, Label } from 'recharts';

export const RationaliteChart: React.FC = () => {
  // Indifference Curve Function: U = 4 => Y = 4/X
  const generateCurveData = () => {
    const data = [];
    // Start slightly above 0 to avoid infinite Y
    for (let x = 0.5; x <= 5.5; x += 0.1) {
      data.push({ x: parseFloat(x.toFixed(1)), yCurve: parseFloat((4 / x).toFixed(2)) });
    }
    return data;
  };

  const curveData = generateCurveData();

  // Baskets
  const baskets = [
    { name: 'A', x: 2, y: 2, u: 4, fill: '#6366f1' }, // Indigo (U=4)
    { name: 'C', x: 1, y: 4, u: 4, fill: '#6366f1' }, // Indigo (U=4)
    { name: 'B', x: 3, y: 2, u: 6, fill: '#10b981' }, // Emerald (U=6)
    { name: 'D', x: 4, y: 3, u: 12, fill: '#f59e0b' }, // Amber (U=12)
  ];

  return (
    <div className="h-[500px] w-full bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden">
      
      {/* Chart Title */}
      <div className="absolute top-6 left-8 z-10 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-slate-900 font-bold text-lg leading-tight">Carte d'Indifférence</h3>
        <p className="text-slate-500 text-xs mt-1">Position des Paniers (X, Y)</p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={curveData}
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
            domain={[0, 5]}
            tickCount={6}
            label={{ value: 'Boissons (Y)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
          />
          <Tooltip 
             contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
             labelStyle={{ color: '#64748b', fontWeight: 'bold' }}
             formatter={(value: number, name: string) => [value, name === 'yCurve' ? 'U=4' : 'Quantité']}
             labelFormatter={() => ''}
          />

          {/* Indifference Curve U=4 */}
          <Line 
            type="monotone" 
            dataKey="yCurve" 
            stroke="#6366f1" 
            strokeWidth={3} 
            strokeDasharray="5 5"
            dot={false}
            name="Courbe U=4" 
            isAnimationActive={true}
          />

          {/* Baskets Points */}
          {baskets.map((basket) => (
            <React.Fragment key={basket.name}>
              <ReferenceDot 
                x={basket.x} 
                y={basket.y} 
                r={6} 
                fill={basket.fill} 
                stroke="white" 
                strokeWidth={2} 
              />
              <ReferenceDot x={basket.x} y={basket.y} r={0}>
                <Label 
                  value={basket.name} 
                  position="top" 
                  offset={10} 
                  fontWeight="900" 
                  fill={basket.fill} 
                  fontSize={14}
                />
              </ReferenceDot>
            </React.Fragment>
          ))}

          {/* Annotations */}
          <ReferenceLine 
             segment={[{ x: 2, y: 2 }, { x: 3, y: 2 }]} 
             stroke="#10b981" 
             strokeWidth={2}
             strokeDasharray="2 2"
          >
             <Label value="+ X (Préféré)" position="bottom" fill="#10b981" fontSize={10} />
          </ReferenceLine>

        </ComposedChart>
      </ResponsiveContainer>

      {/* Mini Legend Overlay */}
      <div className="absolute bottom-4 right-6 bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-slate-100 shadow-sm flex flex-col gap-2 pointer-events-none">
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-indigo-500 border-b border-indigo-500 border-dashed"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Courbe d'Indifférence (U=4)</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">U = 6 (Préféré)</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">U = 12 (Préféré ++)</span>
         </div>
      </div>
    </div>
  );
};