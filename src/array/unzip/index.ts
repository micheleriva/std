export function unzip<T>(arrays: T[][]): T[][] {
  return arrays[0]?.map((_: any, i: number) => arrays.map((array: any[]) => array[i])) ?? [];
}

export function inherit() {
  Array.prototype.unzip = function <T>(): T[][] {
    return unzip(this as T[][]);
  };
}

export default unzip;
