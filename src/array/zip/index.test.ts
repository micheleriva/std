import { zip, inherit } from './index';

describe('zip', () => {
   it('should correctly zip arrays', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const c = [7, 8, 9];
      const zipped = zip([a, b, c]);
      expect(zipped).toStrictEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
   });

    it('should correctly zip into polymorphic arrays', () => {
        const a = [1, 2, 3];
        const b = ["one", "two", "three"];
        const zipped = zip([a, b]);
        expect(zipped).toStrictEqual([[1, "one"], [2, "two"], [3, "three"]]);
    });

    it('should correctly zip into polymorphic arrays', () => {
        const a = [1, 2, 3];
        const b = ["one", "two", "three"];
        const c = [true, false, true];
        const zipped = zip([a, b, c]);
        expect(zipped).toStrictEqual([[1, "one", true], [2, "two", false], [3, "three", true]]);
    });
});

describe('inherited zip', () => {
    inherit();
    it('should correctly extend the array class', () => {
        expect([1,2,3].zip(["1", "2", "3"], ["one", "two", "three"])).toStrictEqual([[1, "1", "one"], [2, "2", "two"], [3, "3", "three"]]);
    });
});
