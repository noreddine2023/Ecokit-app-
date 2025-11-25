import { MarketParams, CalculationResult } from '../types';

export const calculateEquilibrium = (params: MarketParams): CalculationResult => {
  // Qd = a - bP
  // Qo = c + dP
  // a - bP = c + dP
  // a - c = (b + d)P
  // P = (a - c) / (b + d)
  
  const { demandIntercept, demandSlope, supplyIntercept, supplySlope } = params;
  
  const price = (demandIntercept - supplyIntercept) / (demandSlope + supplySlope);
  const quantity = demandIntercept - (demandSlope * price);
  
  return {
    price: parseFloat(price.toFixed(2)),
    quantity: parseFloat(quantity.toFixed(2))
  };
};

// Generates data where X = Price (Mathematical Q=f(P) view) - DEPRECATED for visual, keeping for logic if needed
export const generateChartData = (params: MarketParams, equilibriumPrice: number) => {
  const data = [];
  const maxPrice = Math.ceil(equilibriumPrice * 2);
  
  for (let p = 0; p <= maxPrice; p += (maxPrice / 20)) {
    const safeP = parseFloat(p.toFixed(1));
    const qd = params.demandIntercept - (params.demandSlope * safeP);
    const qo = params.supplyIntercept + (params.supplySlope * safeP);
    
    if (qd >= 0 && qo >= 0) {
      data.push({
        price: safeP,
        demand: parseFloat(qd.toFixed(1)),
        supply: parseFloat(qo.toFixed(1)),
      });
    }
  }
  return data;
};

// Generates data where X = Quantity (Standard Econ P=f(Q) view)
export const generateEconChartData = (params: MarketParams, equilibriumQuantity: number) => {
  const data = [];
  // Determine range for Quantity (X-axis)
  // We go a bit beyond the equilibrium quantity to show context
  const maxQ = Math.max(100, equilibriumQuantity * 2);
  const step = maxQ / 50;

  for (let q = 0; q <= maxQ; q += step) {
    const safeQ = parseFloat(q.toFixed(1));
    
    // Calculate Price for Demand Curve: Qd = a - bP  ->  P = (a - Qd) / b
    let priceDemand: number | null = (params.demandIntercept - safeQ) / params.demandSlope;
    
    // Calculate Price for Supply Curve: Qo = c + dP  ->  P = (Qo - c) / d
    let priceSupply: number | null = (safeQ - params.supplyIntercept) / params.supplySlope;

    // Filter out negative prices or invalid quantities for supply
    if (priceDemand < 0) priceDemand = null;
    if (priceSupply < 0) priceSupply = null;
    // Supply curve usually starts at Q = intercept. If Q < intercept, P would be negative in this linear model
    if (safeQ < params.supplyIntercept) priceSupply = null;

    if (priceDemand !== null || priceSupply !== null) {
      data.push({
        quantity: safeQ,
        demandPrice: priceDemand !== null ? parseFloat(priceDemand.toFixed(2)) : null,
        supplyPrice: priceSupply !== null ? parseFloat(priceSupply.toFixed(2)) : null,
      });
    }
  }
  return data;
};