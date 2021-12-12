import * as array from './array';
import * as string from './string';
import * as functions from './function';

export function inherit() {
    array.inherit();
    string.inherit();
    functions.inherit()
}

export default {
    ...array,
    ...string,
    ...functions
}
