export function zip(arrays: any[][]): any[][] {
  return arrays[0]?.map((_: any, i: number) => arrays.map((array: any[]) => array[i])) ?? [];
}

export function inherit() {
  Array.prototype.zip = function (...arrays: any[]): any[][] {
    return zip([this, ...arrays]);
  };
}

export default zip;
