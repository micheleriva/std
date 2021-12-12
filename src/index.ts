import * as array from './array';
import * as string from './string';

export function inherit() {
    array.inherit();
    string.inherit();
}

export default {
    ...array,
    ...string,
}
