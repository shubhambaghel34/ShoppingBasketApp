export interface PricingStrategy {
    calculateTotal(count: number, unitPrice: number): number;
  }
  