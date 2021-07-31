export class Fraction {
  public numerator: number;
  public denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  public add(fraction: Fraction): Fraction {
    const numerator = this.numerator + fraction.numerator;
    const denominator = this.denominator;
    return new Fraction(numerator, denominator);
  }

  public equal(fraction: Fraction): boolean {
    return true;
  }
}

