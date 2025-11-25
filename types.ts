export interface MarketParams {
  demandIntercept: number; // The '100' in 100 - 5P
  demandSlope: number;     // The '5' in 100 - 5P
  supplyIntercept: number; // The '20' in 20 + 3P
  supplySlope: number;     // The '3' in 20 + 3P
}

export interface CalculationResult {
  price: number;
  quantity: number;
}
