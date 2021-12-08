import { transpose, inherit } from './index';

describe('transpose', () => {
  it('should correctly transpose an array', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ];
    expect(transpose(arr)).toEqual(expected);
  });

  it('should correctly transpose an array of strings', () => {
    const arr = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i'],
    ];
    const expected = [
      ['a', 'd', 'g'],
      ['b', 'e', 'h'],
      ['c', 'f', 'i'],
    ];
    expect(transpose(arr)).toEqual(expected);
  });
});

describe('inherited transpose', () => {
  inherit();

  it('should correctly transpose an array using the prototype transpose method', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ];
    expect(arr.transpose()).toEqual(expected);
  });
});
