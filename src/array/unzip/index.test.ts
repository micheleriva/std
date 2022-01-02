import { unzip, inherit } from './index';

describe('zip', () => {
  it('should correctly unzip arrays', () => {
    const a = [1, 2];
    const b = [2, 3];
    const c = [3, 4];
    const unzipped = unzip([a, b, c]);
    expect(unzipped).toStrictEqual([
      [1, 2, 3],
      [2, 3, 4],
    ]);
  });

  it('should correctly unzip into polymorphic arrays', () => {
    const a = [1, 2];
    const b = ['a', 'b'];
    const unzipped = unzip<number | string>([a, b]);
    expect(unzipped).toStrictEqual([
      [1, 'a'],
      [2, 'b'],
    ]);
  });

  it('should correctly unzip into polymorphic arrays', () => {
    const a = [1, 2];
    const b = ['a', 'b'];
    const c = [true, false];
    const unzipped = unzip<number | string | boolean>([a, b, c]);
    expect(unzipped).toStrictEqual([
      [1, 'a', true],
      [2, 'b', false],
    ]);
  });

  it('should correctly unzip into polymorphic arrays', () => {
    const a = [1, 'a', true];
    const b = [2, 'b', false];
    const unzipped = unzip([a, b]);
    expect(unzipped).toStrictEqual([
      [1, 2],
      ['a', 'b'],
      [true, false],
    ]);
  });

  it('should correctly unzip arrays with at least one empty', () => {
    const a = [4, 5];
    const unzipped = unzip([[], a]);
    expect(unzipped).toStrictEqual([]);
  });

  it('should correctly return an empty array with the unzip of an empty array', () => {
    const unzipped = unzip([]);
    expect(unzipped).toStrictEqual([]);
  });
});

describe('inherited unzip', () => {
  inherit();
  it('should correctly extend the array class', () => {
    expect(Array.prototype.unzip).toBeDefined();
    expect(
      [
        [1, 2],
        [2, 3],
        [3, 4],
      ].unzip(),
    ).toStrictEqual([
      [1, 2, 3],
      [2, 3, 4],
    ]);
  });
});
