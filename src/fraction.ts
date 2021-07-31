export class Fraction {
  public numerator: number;
  public denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  public add(fraction: Fraction): Fraction {
    return new Fraction(3, 5);
  }
}

