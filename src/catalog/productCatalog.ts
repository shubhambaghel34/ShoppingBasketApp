import { Product } from '../types/Product';
import { Item } from '../types/Item';
import { NoOffer } from '../strategies/NoOffer';
import { BuyOneGetOneFree } from '../strategies/BuyOneGetOneFree';
import { ThreeForTwo } from '../strategies/ThreeForTwo';

export const productCatalog: Record<Item, Product> = {
  Apple: { name: 'Apple', price: 3500, strategy: new NoOffer() },
  Banana: { name: 'Banana', price: 2000, strategy: new NoOffer() },
  Melon: { name: 'Melon', price: 5000, strategy: new BuyOneGetOneFree() },
  Lime: { name: 'Lime', price: 1500, strategy: new ThreeForTwo() }
};


export function resolveItem(name: string): Product | undefined {
    return productCatalog[name as Item];
  }