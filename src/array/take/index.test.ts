import { take, inherit } from './index';

describe('take', () => {
  it('should take the first x elements of an array', () => {
    expect(take([1, 2, 3, 4, 5], 3)).toStrictEqual([1, 2, 3]);
    expect(take([], 4)).toStrictEqual([]);
  });
});

describe('inherited take', () => {
  it('should correctly extend the array class', () => {
    inherit();
    expect([1, 2, 3].take(2)).toStrictEqual([1, 2]);
  });
});
