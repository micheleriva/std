export function toList(str: string): string[] {
  return str.split('');
}

export function inherit() {
  String.prototype.toList = function (): string[] {
    return this.split('');
  };
}
