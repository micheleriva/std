export function tails<T>(arr: T[]): T[][] {
  return arr
    .reduce((acc: T[][], _, i: number) => {
      return [...acc, arr.slice(i)];
    }, [] as T[][])
    .concat([[]]);
}

export function inherit() {
  Array.prototype.tails = function <T>(): T[][] {
    return tails(this);
  };
}
