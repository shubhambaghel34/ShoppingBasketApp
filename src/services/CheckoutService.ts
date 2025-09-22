import { resolveItem } from "../catalog/productCatalog";
import { Basket } from "../main/Basket";
import { Money } from "../main/Money";
import { Item } from "../types/Item";


export class CheckoutService {
    private basket: Basket;

    constructor(basket?: Basket) {
        this.basket = basket ?? new Basket();
    }

    addItem(input: string): void {
        const item = resolveItem(input);
        if (!item) {
            throw new Error(`Unknown item: ${input}`);
        }
        this.basket.add(item);
    }

    addItems(inputs: string[]): void {
        inputs.forEach(i => this.addItem(i));
    }

    getTotalPaise(): number {
        return this.basket.calculateTotal();
    }

    getTotalFormatted(): string {
        return Money.format(this.getTotalPaise());
    }

    getBasketItems(): Item[] {
        return [...this['basket']['items']]; // retrive items
    }
}
