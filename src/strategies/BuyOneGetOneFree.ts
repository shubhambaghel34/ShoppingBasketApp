import { PricingStrategy } from './PricingStrategy';

export class BuyOneGetOneFree implements PricingStrategy {
  calculateTotal(count: number, unitPrice: number): number {
    const payable = Math.ceil(count / 2);
    return payable * unitPrice;
  }
}
