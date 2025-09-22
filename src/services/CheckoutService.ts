import { resolveItem } from "../catalog/productCatalog";
import { Basket } from "../main/Basket";
import { Money } from "../main/Money";
import { Item } from "../types/Item";
import { Product } from "../types/Product";

export class CheckoutService {
    private basket: Basket;
  
    constructor(basket?: Basket) {
      this.basket = basket ?? new Basket();
    }
  
    /**
     * Adds a single item to the basket.
     * @param input Item name as string
     * @throws Error if input is invalid or unknown
     */
    addItem(input: string): void {
      if (!input || typeof input !== "string") {
        throw new Error(`Invalid item input: ${input}`);
      }
  
      const item: Product | undefined = resolveItem(input.trim());
      if (!item) {
        throw new Error(`Unknown item: ${input}`);
      }
  
      this.basket.add(item.name);
    }
  
    /**
     * Adds multiple items to the basket.
     * Invalid items are skipped and logged.
     * @param inputs Array of item names
     */
    addItems(inputs: (string | null | undefined)[]): void {
      if (!inputs || !Array.isArray(inputs)) {
        throw new Error("addItems expects a non-empty array of strings");
      }
  
      inputs.forEach((input) => {
        if (input != null) {
          try {
            this.addItem(input);
          } catch (err) {
            if (err instanceof Error) {
              console.warn(err.message);
            } else {
              console.warn("Unknown error adding item");
            }
          }
        }
      });
    }
  
    /**
     * Returns total basket price in paise
     */
    getTotalPaise(): number {
      return this.basket.calculateTotal();
    }
  
    /**
     * Returns formatted total, e.g., ₹135.00
     */
    getTotalFormatted(): string {
      return Money.format(this.getTotalPaise());
    }
  
    /**
     * Returns all items currently in the basket
     */
    getBasketItems(): Item[] {
      return [...this['basket']['items']]; // safe readonly copy
    }
  
    /**
     * Clears the basket
     */
    clearBasket(): void {
      this['basket']['items'] = [];
    }
  
    /**
     * Checks if basket is empty
     */
    isEmpty(): boolean {
      return this['basket']['items'].length === 0;
    }
  }
