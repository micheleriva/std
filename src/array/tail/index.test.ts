import { tail, inherit } from './index';

describe('tail', () => {
  it('should correctly retrieve the tail of an array', () => {
    expect(tail([1, 2, 3])).toStrictEqual([2, 3]);
    expect(tail([1])).toStrictEqual([]);
    expect(tail([])).toStrictEqual([]);
  });
});

describe('inherited tail', () => {
  inherit();
  it('should correctly extend the array class', () => {
    expect(Array.prototype.tail).toBeDefined();
    expect([1, 2, 3].tail()).toStrictEqual([2, 3]);
    expect([].tail()).toStrictEqual([]);
  });
});
