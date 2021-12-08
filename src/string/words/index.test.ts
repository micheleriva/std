import { words, inherit } from './index';

describe('words', () => {
  it('should correctly break a string into words', () => {
    expect(words('hello, world!')).toStrictEqual(['hello,', 'world!']);
  });
});

describe('inherited words', () => {
  it('should correctly extend the string class', () => {
    inherit();
    expect('hello, world!'.words()).toStrictEqual(['hello,', 'world!']);
  });
});
