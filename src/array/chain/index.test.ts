import { chain, inherit } from './index';

describe('chain', () => {
  it('should correctly chain a function', () => {
    const result = chain([1, 2, 3], (x) => x.concat(4));
    expect(result).toEqual([1, 2, 3, 4]);
  });
});

describe('inherited chain', () => {
  inherit();
  it('should correctly extend the array class', () => {
    const result = [1, 2, 3].concat(4);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
