export function tail<T>(array: T[]): T[] {
  const [_, ...rest] = array;
  return rest ?? [];
}

export function inherit() {
  Array.prototype.tail = function <T>(): T[] {
    return tail(this as T[]);
  };
}

export default tail;
