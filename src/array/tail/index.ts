export function tail<T>(array: T[]): T[] {
  const [_, ...tail] = array;
  return tail ?? [];
}

export function inherit() {
  Array.prototype.tail = function <T>(): T[] {
    return tail(this as T[]);
  };
}
