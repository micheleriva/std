import * as chain from './chain';
import * as drop from './drop';
import * as head from './head';
import * as last from './last';
import * as product from './product';
import * as range from './range';
import * as sum from './sum';
import * as tail from './tail';
import * as tails from './tails';
import * as take from './take';
import * as transpose from './transpose';
import * as union from './union';
import * as zip from './zip';

export function inherit() {
  chain.inherit();
  drop.inherit();
  head.inherit();
  last.inherit();
  product.inherit();
  range.inherit();
  sum.inherit();
  tail.inherit();
  tails.inherit();
  take.inherit();
  transpose.inherit();
  union.inherit();
  zip.inherit();
}

export default {
  chain,
  drop,
  head,
  last,
  product,
  range,
  sum,
  tail,
  tails,
  take,
  transpose,
  union,
  zip,
};
