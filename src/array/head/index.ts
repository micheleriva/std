export function head<T>(arr: T[]): T {
  return arr?.[0];
}

export function inherit() {
  Array.prototype.head = function <T>(): T {
    return head(this as T[]);
  };
}
