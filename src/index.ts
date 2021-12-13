import * as array from './array';
import * as string from './string';
import * as functions from './function';
import * as object from './object';

export function inherit() {
    array.inherit();
    string.inherit();
    functions.inherit();
    object.inherit();
}

export default {
    ...array,
    ...string,
    ...functions,
    ...object
}
