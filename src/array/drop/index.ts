export function drop<T>(arr: T[], n: number): T[] {
  return arr.slice(n);
}

export function inherit() {
  Array.prototype.drop = function <T>(n: number): T[] {
    return drop(this, n);
  };
}
