import { drop, inherit } from './index';

describe('drop', () => {
  it('should correctly drop x elements of an array', () => {
    expect(drop([1, 2, 3, 4, 5], 2)).toStrictEqual([3, 4, 5]);
    expect(drop([], 4)).toStrictEqual([]);
  });
});

describe('inherited drop', () => {
  it('should correctly extend the array class', () => {
    inherit();
    expect(Array.prototype.drop).toBeDefined();
    expect([1, 2, 3, 4, 5].drop(2)).toStrictEqual([3, 4, 5]);
  });
});
