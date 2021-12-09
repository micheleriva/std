export function chain(array, predicate) {
    return predicate(array);
}
export function inherit() {
    Array.prototype.chain = function(predicate) {
        return chain(this, predicate);
    };
}
