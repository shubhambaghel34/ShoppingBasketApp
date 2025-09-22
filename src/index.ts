import { CheckoutService } from "./services/CheckoutService";

const items = process.argv.slice(2);

if (items.length === 0) {
  console.log("Please provide items: npm start Apple Banana Melon");
  process.exit(1);
}

const checkout = new CheckoutService();
checkout.addItems(items);

console.log("Basket:", items.join(", "));

// methods from CheckoutService:
console.log("Total (paise):", checkout.getTotalPaise());
console.log("Total (formatted):", checkout.getTotalFormatted());
