import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceDot, Label } from 'recharts';

export const GlacesChart: React.FC = () => {
  // Scenario:
  // Initial Demand: Q = 900 - 40P  (Derived from A: P=10,Q=500 and B: P=15,Q=300)
  // Shifted Demand (Canicule): Q = 1200 - 40P (Derived from P=10, Q=800, parallel slope)

  const generateData = () => {
    const data = [];
    for (let q = 0; q <= 1000; q += 50) {
      // P = (900 - Q) / 40
      const priceBase = (900 - q) / 40;
      // P = (1200 - q) / 40
      const priceShift = (1200 - q) / 40;

      data.push({
        quantity: q,
        priceBase: priceBase >= 0 ? priceBase : null,
        priceShift: priceShift >= 0 ? priceShift : null,
      });
    }
    return data;
  };

  const data = generateData();

  // Points
  const pointA = { q: 500, p: 10 };
  const pointB = { q: 300, p: 15 };
  const pointC = { q: 800, p: 10 }; // Canicule

  return (
    <div className="h-[500px] w-full bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden">
      
      {/* Chart Title */}
      <div className="absolute top-6 left-8 z-10 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-slate-900 font-bold text-lg leading-tight">Mouvements vs Déplacements</h3>
        <p className="text-slate-500 text-xs mt-1">Impact du Prix vs Impact de la Météo</p>
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
            domain={[0, 1000]}
            label={{ value: 'Quantité de Glaces (Q)', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
          />
          <YAxis 
            label={{ value: 'Prix (DH)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
            domain={[0, 25]}
          />
          <Tooltip 
             contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
             labelStyle={{ color: '#64748b', fontWeight: 'bold' }}
             formatter={(value: number) => [value ? `${value.toFixed(2)} DH` : 'N/A', 'Prix']}
             labelFormatter={(label) => `Quantité : ${label}`}
          />

          {/* Initial Curve */}
          <Line 
            type="monotone" 
            dataKey="priceBase" 
            stroke="#0ea5e9" 
            strokeWidth={3} 
            dot={false}
            name="Demande Initiale" 
          />

          {/* Shifted Curve (Dotted) */}
          <Line 
            type="monotone" 
            dataKey="priceShift" 
            stroke="#f59e0b" 
            strokeWidth={3} 
            strokeDasharray="5 5"
            dot={false}
            name="Demande Canicule" 
          />

          {/* Point A */}
          <ReferenceDot x={pointA.q} y={pointA.p} r={6} fill="#0ea5e9" stroke="white" strokeWidth={2} />
          <ReferenceDot x={pointA.q} y={pointA.p} r={0}>
             <Label value="A" position="right" fill="#0ea5e9" fontWeight="bold" offset={10}/>
          </ReferenceDot>

          {/* Point B */}
          <ReferenceDot x={pointB.q} y={pointB.p} r={6} fill="#0ea5e9" stroke="white" strokeWidth={2} />
          <ReferenceDot x={pointB.q} y={pointB.p} r={0}>
             <Label value="B" position="top" fill="#0ea5e9" fontWeight="bold" offset={10}/>
          </ReferenceDot>

          {/* Point C (Shift) */}
          <ReferenceDot x={pointC.q} y={pointC.p} r={6} fill="#f59e0b" stroke="white" strokeWidth={2} />
          <ReferenceDot x={pointC.q} y={pointC.p} r={0}>
             <Label value="C (Canicule)" position="top" fill="#f59e0b" fontWeight="bold" offset={10}/>
          </ReferenceDot>

          {/* Visualizing Movement A -> B */}
          <ReferenceLine segment={[{ x: pointA.q, y: pointA.p }, { x: pointB.q, y: pointB.p }]} stroke="#0ea5e9" strokeWidth={0} />
          
          {/* Visualizing Shift A -> C */}
          <ReferenceLine 
             segment={[{ x: pointA.q, y: pointA.p }, { x: pointC.q, y: pointC.p }]} 
             stroke="#f59e0b" 
             strokeWidth={1}
             strokeDasharray="2 2"
          >
             <Label value="Déplacement" position="bottom" fill="#f59e0b" fontSize={10}/>
          </ReferenceLine>

        </LineChart>
      </ResponsiveContainer>

      {/* Mini Legend Overlay */}
      <div className="absolute bottom-4 right-6 bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-slate-100 shadow-sm flex flex-col gap-2 pointer-events-none">
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-sky-500 rounded-full"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Courbe Initiale (Mouvement)</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-amber-500 border-b border-amber-500 border-dashed"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Nouvelle Courbe (Déplacement)</span>
         </div>
      </div>
    </div>
  );
};