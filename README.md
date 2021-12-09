# My personal JavaScript/TypeScript standard library

[![Build Status](https://github.com/micheleriva/std/actions/workflows/coverage.yml/badge.svg?branch=main)](https://github.com/micheleriva/std/actions/workflows/coverage.yml)
[![codecov](https://codecov.io/gh/micheleriva/std/branch/main/graph/badge.svg?token=9J4v8p0hSI)](https://codecov.io/gh/micheleriva/std)

After some time playing around with Haskell, I miss some of its straightforward functions in the default JavaScript std library. So I'm translating a small portion of Prelude into TypeScript.

# Methods

### `Array.chain`
Works similar to `Promise.then`, but is synchronous.

```js
[1, 2, 3].chain(xs => [...xs, 4]); // => [1, 2, 3, 4]
```

### `Array.head`
Returns the head of an array.

```js
[1, 2, 3].head(); // => [1]
```

### `Array.last`
Returns the last element of an array.

```js
[1, 2, 3].last(); // => [3]
```

### `Array.product`
Returns the product of all the number inside an array of numbers.

```js
[1, 2, 3, 4].product(); // => 12
```

### `Array.range`
Returns an array of numbers from `start` to `end` (inclusive). <br />
You can also specify a step size.

```js
[].range(1, 5); // => [1, 2, 3, 4, 5]
[].range(2, 10, 2); // => [2, 4, 6, 8, 10]
[].range(1.5, 5.5, 0.5); // => [1.5, 2.5, 3.5, 4.5, 5.5]
```

### `Array.sum`
Returns the sum of all the number inside an array of numbers.

```js
[1, 2, 3, 4].product(); // => 10
```

### `Array.tail`
Returns the tail of an array.

```js
[1, 2, 3].tail(); // => [2, 3]
```

### `Array.transpose`
Transposes a matrix.

```js
[[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose(); // => [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

### `Array.union`
Returns the union of two arrays, with unique values.

```js
[1, 2, 3, 4].union([2, 5, 6]); // => [1, 2, 3, 4, 5, 6]
```

### `String.lines`
Returns the lines in a string

```js
const str = `Hello!
I am a multiline
string!
`;

str.lines(); // => ['Hello!', 'I am a multiline', 'string!']
```

### `String.words`
Returns the words in a string.

```js
"Hello, world!".words(); // => ["Hello,", "world!"]
```

# License
[MIT](/LICENSE.md)
