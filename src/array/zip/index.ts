export function zip<T>(arrays: T[][]): T[][] {
  return arrays.length > 0
    ? arrays
        .reduce((prev: any[], curr: any[]) => (prev.length < curr.length ? prev : curr))
        .map((_: any, i: number) => arrays.map((array: any[]) => array[i]))
    : [];
}

export function inherit() {
  Array.prototype.zip = function <T>(...arrays: T[][]): T[][] {
    return zip([this, ...arrays]);
  };
}

export default zip;
