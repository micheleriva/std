export function transpose(xs) {
    return xs[0].map(function(_, i) {
        return xs.map(function(x) {
            return x[i];
        });
    });
}
export function inherit() {
    Array.prototype.transpose = function() {
        return transpose(this);
    };
}
