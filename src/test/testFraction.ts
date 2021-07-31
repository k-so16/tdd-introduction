import { assert } from 'chai';
import { Fraction } from '../fraction';

describe('Fraction Add Test', () => {
  it('add test 1', () => {
    const frac1 = new Fraction(1, 5);
    const frac2 = new Fraction(2, 5);
    const result = frac1.add(frac2);
    assert.equal(result.numerator, 3);
    assert.equal(result.denominator, 5);
  });

  it('add test 2', () => {
    const frac1 = new Fraction(4, 7);
    const frac2 = new Fraction(2, 7);
    const result = frac1.add(frac2);
    assert.equal(result.numerator, 6);
    assert.equal(result.denominator, 7);
  });

});

