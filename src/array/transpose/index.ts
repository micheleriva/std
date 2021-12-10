export function transpose<T>(xs: T[][]): T[][] {
  return xs[0].map((_, i) => xs.map((x) => x[i]));
}

export function inherit() {
  Array.prototype.transpose = function <T>(): T[][] {
    return transpose(this as T[][]);
  };
}

export default transpose;
