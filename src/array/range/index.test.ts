import { range, inherit } from './index';

describe('range', () => {
  it('should correctly create an array of numbers closed between two numbers', () => {
    expect(range(-1, 1)).toStrictEqual([-1, 0, 1]);
    expect(range(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(range(5, 100, 5)).toStrictEqual([
      5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
    ]);
    expect(range(-1, 1, 0.5)).toStrictEqual([-1, -0.5, 0, 0.5, 1]);
    expect(range(1.5, 5.5, 0.5)).toStrictEqual([1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5]);
    expect(range(10, 0, -1)).toStrictEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });
});

describe('inherited range', () => {
  it('should correctly extend the array class', () => {
    inherit();
    expect([].range(-1, 1)).toStrictEqual([-1, 0, 1]);
    expect([].range(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
    expect([].range(5, 100, 5)).toStrictEqual([
      5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
    ]);
    expect([].range(-1, 1, 0.5)).toStrictEqual([-1, -0.5, 0, 0.5, 1]);
    expect([].range(1.5, 5.5, 0.5)).toStrictEqual([1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5]);
    expect([].range(10, 0, -1)).toStrictEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });
});
