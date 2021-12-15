import { rec, inherit } from './index';

const recFnUnsafe = (number: number, sum = 0): number =>
  number === 0 ? sum : recFnUnsafe(number - 1, sum + number);

const recFnSafe = (number: number, sum = 0) =>
  number === 0 ? sum : () => recFnSafe(number - 1, sum + number);

describe('rec', () => {
  it('should throw a stack overflow error', () => {
    expect(() => recFnUnsafe(10000)).toThrowError();
  });

  it('should implement tail-call elimination via trampoline', () => {
    const fn = rec(recFnSafe(10000) as Function);
    expect(fn()).toBe(50005000);
  });
});

describe('inherited rec', () => {
  inherit();
  it('should correctly extend the Function class', () => {
    expect(() => recFnUnsafe(10000)).toThrowError();
    expect(recFnSafe.rec(10000)).toBe(50005000);
  });
});
