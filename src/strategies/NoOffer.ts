import { PricingStrategy } from './PricingStrategy';

export class NoOffer implements PricingStrategy {
  calculateTotal(count: number, unitPrice: number): number {
    return count * unitPrice;
  }
}
