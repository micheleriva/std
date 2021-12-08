export type Predicate<T, A> = (array: T[], ...args: any[]) => A;
export type PrototypePredicate<T, A> = (...args: any[]) => A;

export function chain<T, A>(array: T[], predicate: Predicate<T, A>): A {
  return predicate(array);
}

export function inherit() {
  Array.prototype.chain = function <T, A>(predicate: PrototypePredicate<T, A>): A {
    return chain(this as T[], predicate);
  };
}
