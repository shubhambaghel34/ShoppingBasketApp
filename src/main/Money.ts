/**
 * Utility for handling money stored in paise
 */
export class Money {
    static format(paise: number): string {
      const rupees = Math.floor(paise / 100);
      const remainder = Math.abs(paise % 100);
      return `₹${rupees}.${remainder.toString().padStart(2, '0')}`;
    }
  }
  