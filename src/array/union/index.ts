export function union<T>(a: T[], b: T[]): T[] {
  return a.concat(b.filter(x => a.indexOf(x) < 0));
}

export function inherit() {
  Array.prototype.union = function <T>(a: T[], b?: T[]): T[] {
    if (!b) return union(this as T[], a);
    return union(a, b);
  };
}
