import { lines, inherit } from './index';

describe('lines', () => {
  it('should correctly return an array of lines', () => {
    expect(lines('foo\nbar\nbaz')).toStrictEqual(['foo', 'bar', 'baz']);
  });
});

describe('inherited lines', () => {
  inherit();
  it('should correctly extend the string class', () => {
    expect('foo\nbar\nbaz'.lines()).toStrictEqual(['foo', 'bar', 'baz']);
  });
});
