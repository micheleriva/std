import { union, inherit } from './index';

describe('union', () => {
  it('should merge two arrays maintaining unique values', () => {
    expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(union(['1', '2', '3'], ['2', '3', '4'])).toEqual(['1', '2', '3', '4']);
    expect(union([null, null], [null])).toEqual([null, null]);
  });
});

describe('inherited union', () => {
  it('should correctly extend the Array class', () => {
    inherit();
    expect(Array.prototype.union).toBeDefined();
    expect([1, 2, 3].union([2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
});
