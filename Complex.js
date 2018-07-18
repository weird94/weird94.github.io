class Complex {
  constructor(real, imaginary) {
    this.checkIsLegal({ real, imaginary });
    this.real = real;
    this.imaginary = imaginary;
  }
  getComplex() {
    return this;
  }
  isLegal({ real, imaginary }) {
    return !(isNaN(real) || isNaN(imaginary));
  }
  checkIsLegal(complex) {
    if (!this.isLegal(complex)) {
      throw Error('real and imaginary must be Number');
    }
  }
  add(complex) {
    this.checkIsLegal(complex);
    const { real: a, imaginary: b } = complex;
    const { real: c, imaginary: d } = this;
    return new Complex(a + c, b + d);
  }
  subtract(complex) {
    this.checkIsLegal(complex);
    const { real: a, imaginary: b } = complex;
    const { real: c, imaginary: d } = this;
    return new Complex(a - c, b - d);
  }
  mutiple(complex) {
    this.checkIsLegal(complex);
    const { real: a, imaginary: b } = complex;
    const { real: c, imaginary: d } = this;
    const real = a * c - b * d;
    const imaginary = a * d + b * c;
    return new Complex(real, imaginary);
  }
  divide(complex) {
    this.checkIsLegal(complex);
    const { real: a, imaginary: b } = complex;
    const { real: c, imaginary: d } = this;
    const denominator = c * c + d * d;
    const real = (a * c + b * d) / denominator;
    const imaginary = (b * c - a * d) / denominator;
    return new Complex(real, imaginary);
  }
  isEqual(complex) {
    const { real: a, imaginary: b } = complex;
    const { real: c, imaginary: d } = this;
    return a === c && b === d;
  }
  model() {
    return this.mutiple(this);
  }
  toString() {
    return `${this.real} + ${this.imaginary}i`;
  }
  operatorAdd(complex) {
    return this.add(complex);
  }
}

const a = new Complex(1, 2);
const b = new Complex(5, 6);
console.log('a', a);
console.log('b', b);
console.log('a+b', a + b);
console.log('a.toString()', a.toString());
console.log('a.add(b)', a.add(b));
console.log('a.mutiple(b)', a.mutiple(b));
console.log('a.subtract(b)', a.subtract(b));
console.log('a.divide(b)', a.divide(b));
console.log('a.model()', a.model());
