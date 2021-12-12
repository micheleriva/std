import * as lines from './lines';
import * as toList from './to-list';
import * as words from './words';

export function inherit() {
    lines.inherit();
    toList.inherit();
    words.inherit();
}

export default {
    lines,
    toList,
    words,
}
