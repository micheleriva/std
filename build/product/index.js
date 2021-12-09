export function product(arr) {
    return arr.reduce(function(acc, curr) {
        return acc * curr;
    }, 1);
}
export function inherit() {
    Array.prototype.product = function() {
        return product(this);
    };
}
