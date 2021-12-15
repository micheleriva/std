export const rec =
  (func: Function) =>
  (...args: any[]) => {
    let result = func(...args);

    while (typeof result === 'function') {
      result = result();
    }

    return result;
  };

export function inherit() {
  Function.prototype.rec = function <T>(...args: any[]): T {
    const fn = rec(this);
    return fn(...args);
  };
}

export default rec;
