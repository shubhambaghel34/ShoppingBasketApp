import { Basket } from "../src/main/Basket";



describe('Basket Total Calculation', () => {

  it('empty basket should be 0', () => {
    const basket = new Basket();
    expect(basket.calculateTotal()).toBe(0);
  });

  it('single Apple', () => {
    const basket = new Basket();
    basket.add('Apple');
    expect(basket.calculateTotal()).toBe(3500);
  });

  it('single Banana', () => {
    const basket = new Basket();
    basket.add('Banana');
    expect(basket.calculateTotal()).toBe(2000);
  });

  it('Apple + Banana', () => {
    const basket = new Basket();
    basket.addMany(['Apple', 'Banana']);
    expect(basket.calculateTotal()).toBe(5500);
  });

  it('Melon BOGOF', () => {
    const basket = new Basket();
    basket.addMany(['Melon', 'Melon']);
    expect(basket.calculateTotal()).toBe(5000);

    basket.add('Melon');
    expect(basket.calculateTotal()).toBe(10000); // 3 melons: 2 paid + 1 free
  });

  it('Lime 3-for-2 offer', () => {
    const basket = new Basket();
    basket.addMany(['Lime', 'Lime', 'Lime']);
    expect(basket.calculateTotal()).toBe(3000);

    basket.add('Lime');
    expect(basket.calculateTotal()).toBe(4500); // 3-for-2 + 1 extra
  });

  it('Mixed basket example', () => {
    const basket = new Basket();
    basket.addMany(['Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime']);
    expect(basket.calculateTotal()).toBe(13500);
  });

  it('Large mixed basket', () => {
    const basket = new Basket();
    basket.addMany([
      'Apple','Apple','Banana',
      'Melon','Melon','Melon',
      'Lime','Lime','Lime','Lime'
    ]);
    // Calculation:
    // Apples: 2 * 3500 = 7000
    // Banana: 1 * 2000 = 2000
    // Melons: 3 → 2 paid * 5000 = 10000
    // Limes: 4 → 3-for-2 + 1 = 4500
    // Total = 7000 + 2000 + 10000 + 4500 = 23500
    expect(basket.calculateTotal()).toBe(23500);
  });

  it('throws error for unknown item', () => {
    const basket = new Basket();
    expect(() => basket.add('Chocolate' as any)).toThrow('Unknown item');
  });
});
