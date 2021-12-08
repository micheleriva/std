export function product(arr: number[]): number {
  return arr.reduce((acc, curr) => acc * curr, 0);
}

export function inherit() {
  Array.prototype.product = function(): number {
    return product(this);
  };
}
