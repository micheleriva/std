import { toList, inherit } from './index';

describe('toList', () => {
  it('should split a string into a list of chars', () => {
    expect(toList('abc')).toStrictEqual(['a', 'b', 'c']);
    expect(toList('')).toStrictEqual([]);
  });
});

describe('inherited toList', () => {
  inherit();
  it('should correctly extend the String class', () => {
    expect('abc'.toList()).toStrictEqual(['a', 'b', 'c']);
  });
});
