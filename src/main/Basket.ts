import { Item } from '../types/Item';
import { productCatalog } from '../catalog/productCatalog';

export class Basket {
  private items: Item[] = [];

  add(item: Item) {
    if (!(item in productCatalog)) {
      throw new Error(`Unknown item: ${item}`);
    }
    this.items.push(item);
  }

  addMany(items: Item[]) {
    items.forEach(i => this.add(i));
  }

  calculateTotal(): number {
    const counts: Partial<Record<Item, number>> = {};
    this.items.forEach(item => {
      counts[item] = (counts[item] || 0) + 1;
    });

    let total = 0;
    for (const [item, product] of Object.entries(productCatalog) as [Item, typeof productCatalog[Item]][]) {
      const count = counts[item] || 0;
      total += product.strategy.calculateTotal(count, product.price);
    }
    return total;
  }
}
