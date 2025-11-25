import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceDot, Label, ReferenceArea } from 'recharts';
import { MarketParams } from '../types';
import { generateEconChartData } from '../utils/economics';

interface DisequilibriumChartProps {
  params: MarketParams;
  equilibriumPrice: number;
}

export const DisequilibriumChart: React.FC<DisequilibriumChartProps> = ({ params, equilibriumPrice }) => {
  // We use Q=50 as the equilibrium quantity for the standard generator
  const equilibriumQuantity = 50; 
  const data = generateEconChartData(params, equilibriumQuantity);

  // Scenario 1: Surplus (Price High)
  const priceHigh = 15;
  // Qd at P=15 -> 100 - 5(15) = 25
  const qdHigh = 25;
  // Qo at P=15 -> 20 + 3(15) = 65
  const qoHigh = 65;

  // Scenario 2: Shortage (Price Low)
  const priceLow = 5;
  // Qd at P=5 -> 100 - 5(5) = 75
  const qdLow = 75;
  // Qo at P=5 -> 20 + 3(5) = 35
  const qoLow = 35;

  return (
    <div className="h-[500px] w-full bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden">
      
      {/* Chart Title */}
      <div className="absolute top-6 left-8 z-10 bg-white/90 backdrop-blur px-2 py-1 rounded-lg">
        <h3 className="text-slate-900 font-bold text-lg">Zones de Déséquilibre</h3>
        <p className="text-slate-500 text-xs">Pénurie (Prix Bas) vs Excédent (Prix Haut)</p>
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

          {/* Curves */}
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

          {/* --- SURPLUS VISUALIZATION (Price = 15) --- */}
          {/* Horizontal Line at Price = 15 */}
          <ReferenceLine y={priceHigh} stroke="#f59e0b" strokeDasharray="3 3" />
          <ReferenceDot x={qdHigh} y={priceHigh} r={4} fill="#0891b2" stroke="white" />
          <ReferenceDot x={qoHigh} y={priceHigh} r={4} fill="#c026d3" stroke="white" />
          
          {/* Segment showing gap */}
          <ReferenceLine 
            segment={[{ x: qdHigh, y: priceHigh }, { x: qoHigh, y: priceHigh }]} 
            stroke="#f59e0b" 
            strokeWidth={4}
            opacity={0.6}
          >
            <Label value="EXCÉDENT (40)" position="top" fill="#d97706" fontSize={11} fontWeight="bold" />
          </ReferenceLine>

          {/* --- SHORTAGE VISUALIZATION (Price = 5) --- */}
          {/* Horizontal Line at Price = 5 */}
          <ReferenceLine y={priceLow} stroke="#ef4444" strokeDasharray="3 3" />
          <ReferenceDot x={qoLow} y={priceLow} r={4} fill="#c026d3" stroke="white" />
          <ReferenceDot x={qdLow} y={priceLow} r={4} fill="#0891b2" stroke="white" />

          {/* Segment showing gap */}
          <ReferenceLine 
            segment={[{ x: qoLow, y: priceLow }, { x: qdLow, y: priceLow }]} 
            stroke="#ef4444" 
            strokeWidth={4}
            opacity={0.6}
          >
            <Label value="PÉNURIE (40)" position="bottom" fill="#ef4444" fontSize={11} fontWeight="bold" />
          </ReferenceLine>

          {/* Equilibrium Point */}
          <ReferenceDot x={equilibriumQuantity} y={equilibriumPrice} r={6} fill="#0f172a" stroke="white" strokeWidth={2} />
          <ReferenceLine x={equilibriumQuantity} stroke="#94a3b8" strokeDasharray="3 3" strokeOpacity={0.5} />
          <ReferenceLine y={equilibriumPrice} stroke="#94a3b8" strokeDasharray="3 3" strokeOpacity={0.5} />

        </LineChart>
      </ResponsiveContainer>

      {/* Mini Legend Overlay */}
      <div className="absolute bottom-4 right-6 flex flex-col gap-1 items-end pointer-events-none bg-white/80 p-2 rounded-lg backdrop-blur-sm border border-slate-100">
        <div className="flex items-center gap-2">
           <span className="text-[10px] font-bold text-amber-600 uppercase">Prix {'>'} 10 (Offre {'>'} Demande)</span>
           <div className="w-8 h-1 bg-amber-400 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-[10px] font-bold text-red-600 uppercase">Prix {'<'} 10 (Demande {'>'} Offre)</span>
           <div className="w-8 h-1 bg-red-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};