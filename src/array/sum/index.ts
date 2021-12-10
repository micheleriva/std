export function sum(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

export function inherit() {
  Array.prototype.sum = function(): number {
    return sum(this);
  };
}

export default sum;
