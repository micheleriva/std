import { sum, inherit } from './index';

describe('sum', () => {
  it('should compute the sum of all elements in an array', () => {
    expect(sum([1])).toBe(1);
    expect(sum([0])).toBe(0);
    expect(sum([-1])).toBe(-1);
    expect(sum([-1, 1])).toBe(0);
    expect(sum([-1, 0])).toBe(-1);
    expect(sum([-1, -1])).toBe(-2);
    expect(sum([-1, -2, 3, 4])).toBe(4);
    expect(sum([1, 2, 3, 4])).toBe(10);
  });
});

describe('inherited sum', () => {
  inherit();
  it('should correctly extend the array class', () => {
    expect([1].sum()).toBe(1);
    expect([0].sum()).toBe(0);
    expect([-1].sum()).toBe(-1);
    expect([-1, 1].sum()).toBe(0);
    expect([-1, 0].sum()).toBe(-1);
    expect([-1, -1].sum()).toBe(-2);
    expect([-1, -2, 3, 4].sum()).toBe(4);
    expect([1, 2, 3, 4].sum()).toBe(10);
  });
});
