import type { Predicate } from './array/chain';

declare global {
  interface Array<T> {
    chain<T, A>(predicate: Predicate<T, A>): A;
    drop<T>(n: number): T[];
    head<T>(): T;
    last<T>(): T | undefined;
    product(): number;
    range(from: number, to: number, step?: number): number[];
    sum(): number;
    tail<T>(): T[];
    tails<T>(): T[][];
    take<T>(n: number): T[];
    transpose<T>(): T[][];
    union<T>(array: T[]): T[];
    zip<T>(...array: T[][]): T[][];
    unzip<T>(): T[][];
  }

  interface Object {
    omit<T>(key: string): T;
  }

  interface String {
    words(): string[];
    toList(): string[];
    lines(): string[];
  }

  interface Function {
    rec<T>(this: T, ...args: any[]): T;
  }
}
