import { head, inherit } from './index';

describe('head', () => {
  it('should correctly retrieve the head of an array', () => {
    expect(head([1, 2, 3])).toBe(1);
    expect(head([])).toBe(undefined);
  });
});

describe('inherited head', () => {
  it('should correctly extend the array class', () => {
    inherit();
    expect(Array.prototype.head).toBeDefined();
    expect([1, 2, 3].head()).toBe(1);
  });
});
