export function range(from: number, to: number, step: number = 1): number[] {
  return [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);
}

export function inherit() {
  Array.prototype.range = function (from: number, to: number, step?: number): number[] {
    return range(from, to, step);
  };
}
