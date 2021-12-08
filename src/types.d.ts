import type { Predicate } from './array/chain';

declare global {
  interface Array<T> {
    chain<T, A>(predicate: Predicate<T, A>): A;
    transpose<T>(): T[][];
    union<T>(a: T[], b?: T[]): T[];
    sum(): number;
    product(): number;
  }

  interface String {
    words(): string[];
    lines(): string[];
  }
}
