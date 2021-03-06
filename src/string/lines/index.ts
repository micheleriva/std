export function lines(xs: string): string[] {
  return xs.split('\n');
}

export function inherit() {
  String.prototype.lines = function (): string[] {
    return lines(this as string);
  };
}

export default lines;
