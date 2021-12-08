export function union<T>(a: T[], b: T[]): T[] {
  return a.concat(b.filter((x) => a.indexOf(x) < 0));
}

export function inherit() {
  Array.prototype.union = function <T>(array: T[]): T[] {
    return union(this as T[], array);
  };
}
