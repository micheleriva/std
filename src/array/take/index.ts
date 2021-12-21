export function take<T>(arr: T[], n: number): T[] {
  return arr.slice(0, n);
}

export function inherit() {
  Array.prototype.take = function <T>(n: number): T[] {
    return take(this, n);
  };
}
