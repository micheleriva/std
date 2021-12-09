export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

export function inherit() {
  Array.prototype.last = function <T>(): T | undefined {
    return last(this as T[]);
  };
}
