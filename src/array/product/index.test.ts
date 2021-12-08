import { product, inherit } from './index';

describe('product', () => {
  it('should compute the product all the elements in an array', () => {
    expect(product([1, 2, 3, 4])).toBe(24);
  });
});

describe('inherited product', () => {
  inherit();
  it('should correctly extend the array class', () => {
    expect([2, 3, 4].product()).toBe(24);
  });
});
