import { PricingStrategy } from '../strategies/PricingStrategy';
import { Item } from './Item';

export interface Product {
  name: Item;
  price: number; // stored in paise
  strategy: PricingStrategy;
}
