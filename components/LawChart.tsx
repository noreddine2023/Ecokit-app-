import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceDot, Label } from 'recharts';
import { MarketParams } from '../types';
import { generateEconChartData } from '../utils/economics';

interface LawChartProps {
  params: MarketParams;
}

export const LawChart: React.FC<LawChartProps> = ({ params }) => {
  // Use standard econ data generation
  const data = generateEconChartData(params, 50);

  // Define two price points to illustrate the laws
  const priceLow = 5;
  const priceHigh = 15;

  // Calculate quantities at these prices
  // Demand: Qd = 100 - 5P
  const qdLow = 100 - 5 * priceLow;   // 75
  const qdHigh = 100 - 5 * priceHigh; // 25

  // Supply: Qo = 20 + 3P
  const qoLow = 20 + 3 * priceLow;    // 35
  const qoHigh = 20 + 3 * priceHigh;  // 65

  return (
    <div className="h-[500px] w-full bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden">
      
      {/* Chart Title */}
      <div className="absolute top-6 left-8 z-10 bg-white/90 backdrop-blur px-2 py-1 rounded-lg">
        <h3 className="text-slate-900 font-bold text-lg">Mouvements sur les Courbes</h3>
        <p className="text-slate-500 text-xs">Impact de la variation du Prix (5€ vs 15€)</p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          
          <XAxis 
            dataKey="quantity" 
            type="number" 
            domain={[0, 100]}
            label={{ value: 'Quantité (Q)', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
          />
          <YAxis 
            label={{ value: 'Prix (P)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
            tickLine={false}
            domain={[0, 25]}
          />
          <Tooltip 
             contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
             labelStyle={{ color: '#64748b' }}
             formatter={(value: number, name: string) => [value, name === 'demandPrice' ? 'Prix Demande' : 'Prix Offre']}
             labelFormatter={(label) => `Quantité : ${label}`}
          />

          <Line 
            type="monotone" 
            dataKey="demandPrice" 
            stroke="#0891b2" 
            strokeWidth={3} 
            dot={false} 
            name="Demande" 
          />
          <Line 
            type="monotone" 
            dataKey="supplyPrice" 
            stroke="#c026d3" 
            strokeWidth={3} 
            dot={false} 
            name="Offre" 
          />

          {/* Low Price Reference (P=5) */}
          <ReferenceLine y={priceLow} stroke="#94a3b8" strokeDasharray="3 3" />
          
          {/* High Price Reference (P=15) */}
          <ReferenceLine y={priceHigh} stroke="#94a3b8" strokeDasharray="3 3" />

          {/* DEMAND POINTS */}
          <ReferenceDot x={qdLow} y={priceLow} r={5} fill="#0891b2" stroke="white" strokeWidth={2} />
          <ReferenceDot x={qdHigh} y={priceHigh} r={5} fill="#0891b2" stroke="white" strokeWidth={2} />
          
          {/* SUPPLY POINTS */}
          <ReferenceDot x={qoLow} y={priceLow} r={5} fill="#c026d3" stroke="white" strokeWidth={2} />
          <ReferenceDot x={qoHigh} y={priceHigh} r={5} fill="#c026d3" stroke="white" strokeWidth={2} />

          {/* Arrows/Visuals handled via Labels or just dots for simplicity in Recharts */}
          <ReferenceLine segment={[{ x: qdLow, y: priceLow }, { x: qdHigh, y: priceHigh }]} stroke="#0891b2" strokeDasharray="2 2" opacity={0.5} />
          <ReferenceLine segment={[{ x: qoLow, y: priceLow }, { x: qoHigh, y: priceHigh }]} stroke="#c026d3" strokeDasharray="2 2" opacity={0.5} />

        </LineChart>
      </ResponsiveContainer>

      {/* Custom Legend */}
      <div className="absolute bottom-4 right-6 bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-slate-100 shadow-sm flex flex-col gap-2">
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-600"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Demande : P↗ alors Q↘</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-fuchsia-600"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Offre : P↗ alors Q↗</span>
         </div>
      </div>
    </div>
  );
};
