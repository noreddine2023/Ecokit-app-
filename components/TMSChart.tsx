import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceDot, Label, Area } from 'recharts';

export const TMSChart: React.FC = () => {
  // Indifference Curve Function: U = X * Y = 20
  // Therefore Y = 20 / X
  const generateData = () => {
    const data = [];
    for (let x = 1; x <= 10; x += 0.5) {
      data.push({
        x: x,
        y: parseFloat((20 / x).toFixed(2))
      });
    }
    return data;
  };

  const data = generateData();

  // Point A: X=2, Y=10
  const pointA = { x: 2, y: 10 };
  // Point B: X=4, Y=5
  const pointB = { x: 4, y: 5 };

  return (
    <div className="h-[500px] w-full bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden">
      
      {/* Chart Title */}
      <div className="absolute top-6 left-8 z-10 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-slate-900 font-bold text-lg leading-tight">Courbe d'Indifférence</h3>
        <p className="text-slate-500 text-xs mt-1">Échange entre Pommes (X) et Bananes (Y)</p>
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
            label={{ value: 'Quantité de X (Pommes)', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
          />
          <YAxis 
            label={{ value: 'Quantité de Y (Bananes)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
            domain={[0, 12]}
          />
          <Tooltip 
             contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
             labelStyle={{ color: '#64748b', fontWeight: 'bold' }}
             formatter={(value: number) => [value, 'Quantité']}
             labelFormatter={(label) => `X = ${label}`}
          />

          {/* Indifference Curve */}
          <Line 
            type="monotone" 
            dataKey="y" 
            stroke="#059669" 
            strokeWidth={4} 
            dot={false}
            name="Utilité Constante" 
          />

          {/* Point A */}
          <ReferenceDot x={pointA.x} y={pointA.y} r={6} fill="#0f172a" stroke="white" strokeWidth={2} />
          <ReferenceLine x={pointA.x} stroke="#cbd5e1" strokeDasharray="3 3" />
          <ReferenceLine y={pointA.y} stroke="#cbd5e1" strokeDasharray="3 3" />
          <ReferenceDot x={pointA.x} y={pointA.y} r={0} >
            <Label value="A" position="top" offset={10} fontWeight="bold" fill="#0f172a" />
          </ReferenceDot>

          {/* Point B */}
          <ReferenceDot x={pointB.x} y={pointB.y} r={6} fill="#0f172a" stroke="white" strokeWidth={2} />
          <ReferenceLine x={pointB.x} stroke="#cbd5e1" strokeDasharray="3 3" />
          <ReferenceLine y={pointB.y} stroke="#cbd5e1" strokeDasharray="3 3" />
          <ReferenceDot x={pointB.x} y={pointB.y} r={0} >
            <Label value="B" position="right" offset={10} fontWeight="bold" fill="#0f172a" />
          </ReferenceDot>

          {/* Visualizing the Trade-off (Triangle) */}
          {/* Vertical Drop (Delta Y) */}
          <ReferenceLine 
            segment={[{ x: pointA.x, y: pointA.y }, { x: pointA.x, y: pointB.y }]} 
            stroke="#ef4444" 
            strokeWidth={3}
            strokeDasharray="4 4"
          >
             <Label value="-5 Bananes" position="left" fill="#ef4444" fontSize={11} fontWeight="bold" angle={-90} />
          </ReferenceLine>

          {/* Horizontal Gain (Delta X) */}
          <ReferenceLine 
             segment={[{ x: pointA.x, y: pointB.y }, { x: pointB.x, y: pointB.y }]} 
             stroke="#059669" 
             strokeWidth={3}
             strokeDasharray="4 4"
          >
             <Label value="+2 Pommes" position="bottom" fill="#059669" fontSize={11} fontWeight="bold" />
          </ReferenceLine>

        </LineChart>
      </ResponsiveContainer>

      {/* Mini Legend Overlay */}
      <div className="absolute bottom-4 right-6 bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-slate-100 shadow-sm flex flex-col gap-2 pointer-events-none">
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-emerald-600 rounded-full"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Courbe d'Indifférence</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 border-l-2 border-b-2 border-slate-400 rounded-bl-sm"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Échange (TMS)</span>
         </div>
      </div>
    </div>
  );
};