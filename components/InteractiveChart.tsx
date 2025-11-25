import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, ReferenceLine } from 'recharts';
import { MarketParams, CalculationResult } from '../types';
import { generateEconChartData } from '../utils/economics';

interface InteractiveChartProps {
  params: MarketParams;
  result: CalculationResult;
}

export const InteractiveChart: React.FC<InteractiveChartProps> = ({ params, result }) => {
  // Use the standard Econ generator (Quantity on X, Price on Y)
  const data = generateEconChartData(params, result.quantity);

  return (
    <div className="h-[400px] w-full bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl relative overflow-hidden">
      
      {/* Chart Title */}
      <div className="absolute top-6 left-8 z-10 bg-white/80 px-3 py-1 rounded-lg backdrop-blur-sm">
        <h3 className="text-slate-900 font-bold text-lg">Graphique du Marché</h3>
        <p className="text-slate-500 text-xs">Croisement de l'Offre et la Demande</p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 40,
            right: 20,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          
          <XAxis 
            dataKey="quantity" 
            label={{ value: 'Quantité (Q)', position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            type="number"
            domain={[0, 'auto']}
            stroke="#94a3b8"
            tick={{ fill: '#64748b', fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
          
          <YAxis 
            label={{ value: 'Prix (P)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            stroke="#94a3b8"
            tick={{ fill: '#64748b', fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
          
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#ffffff', 
              borderRadius: '8px', 
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              color: '#0f172a',
              fontSize: '12px'
            }}
            formatter={(value: number, name: string) => [value, name === 'demandPrice' ? 'Prix Demande' : 'Prix Offre']}
            labelFormatter={(label) => `Quantité : ${label}`}
            itemStyle={{ padding: 0 }}
          />

          <ReferenceLine x={result.quantity} stroke="#94a3b8" strokeDasharray="3 3" />
          <ReferenceLine y={result.price} stroke="#94a3b8" strokeDasharray="3 3" />
          
          <Line 
            type="monotone" 
            dataKey="demandPrice" 
            stroke="#0891b2" 
            strokeWidth={4}
            dot={false}
            name="Demande"
            isAnimationActive={true}
            animationDuration={2000}
          />
          <Line 
            type="monotone" 
            dataKey="supplyPrice" 
            stroke="#c026d3" 
            strokeWidth={4}
            dot={false}
            name="Offre"
            isAnimationActive={true}
            animationDuration={2000}
          />
          
          {/* Intersection Point */}
          <ReferenceDot 
            x={result.quantity} 
            y={result.price} 
            r={6} 
            fill="#0f172a" 
            stroke="#fff"
            strokeWidth={2}
          />
          <ReferenceDot 
            x={result.quantity} 
            y={result.price} 
            r={12} 
            fill="none" 
            stroke="#0f172a"
            strokeOpacity={0.2}
            strokeWidth={1}
          >
             <animate attributeName="r" from="12" to="20" dur="1.5s" repeatCount="indefinite"/>
             <animate attributeName="strokeOpacity" from="0.2" to="0" dur="1.5s" repeatCount="indefinite"/>
          </ReferenceDot>

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};