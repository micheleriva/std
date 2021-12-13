import { omit, inherit } from './index';

describe('omit', () => {
   it('should delete a property from an object', () => {
       const obj = {
         a: 1,
         b: 2,
         c: 3,
      };

      expect(omit(obj, 'a')).toEqual({ b: 2, c: 3 });
   });
});

describe('inherited omit', () => {
   inherit();
   it('should correctly extend the Object class', () => {
      expect(Object.omit).toBeDefined();
      expect({a: 1, b: 2, c: 3 }.omit('a')).toStrictEqual({ b: 2, c: 3 });
   });
});
