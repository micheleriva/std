export function unzip<T>(arrays: T[][]): T[][] {
  return arrays[0]?.map((_: T, i: number) => arrays.map((array: T[]) => array[i])) ?? [];
}

export function inherit() {
  Array.prototype.unzip = function <T>(): T[][] {
    return unzip(this as T[][]);
  };
}

export default unzip;
