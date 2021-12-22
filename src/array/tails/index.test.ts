import { tails, inherit } from './index';

describe('tails', () => {
  it('should return all the tails of an array', () => {
    expect(tails([1, 2, 3])).toStrictEqual([[1, 2, 3], [2, 3], [3], []]);
    expect(tails([])).toStrictEqual([[]]);
  });
});

describe('inherited tails', () => {
  it('should correctly extend the array class', () => {
    inherit();
    expect([1, 2, 3].tails()).toStrictEqual([[1, 2, 3], [2, 3], [3], []]);
  });
});
