export function union(a, b) {
    return a.concat(b.filter(function(x) {
        return a.indexOf(x) < 0;
    }));
}
export function inherit() {
    Array.prototype.union = function(array) {
        return union(this, array);
    };
}
