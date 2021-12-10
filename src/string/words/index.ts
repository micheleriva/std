export function words(xs: string): string[] {
  return xs.split(' ');
}

export function inherit() {
  String.prototype.words = function (): string[] {
    return words(this as string);
  };
}

export default words;
