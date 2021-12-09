export function words(xs) {
    return xs.split(' ');
}
export function inherit() {
    String.prototype.words = function() {
        return words(this);
    };
}
