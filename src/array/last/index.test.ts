import { last, inherit } from './index';

describe('last', () => {
  it('should correctly return the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3);
    expect(last([1, 2, 3, 4])).toBe(4);
    expect(last([])).toBeUndefined();
  });
});

describe('inherited last', () => {
  inherit();
  it('should correctly extend the array class', () => {
    expect(Array.prototype.last).toBeDefined();
    expect([1, 2, 3].last()).toBe(3);
    expect([].last()).toBeUndefined();
  });
});
