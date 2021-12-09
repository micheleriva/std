export function lines(xs) {
    return xs.split('\n');
}
export function inherit() {
    String.prototype.lines = function() {
        return lines(this);
    };
}
