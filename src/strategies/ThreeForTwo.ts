import { PricingStrategy } from './PricingStrategy';

export class ThreeForTwo implements PricingStrategy {
  calculateTotal(count: number, unitPrice: number): number {
    const groups = Math.floor(count / 3);
    const remainder = count % 3;
    return groups * 2 * unitPrice + remainder * unitPrice;
  }
}
