export function sum(arr) {
    return arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
}
export function inherit() {
    Array.prototype.sum = function() {
        return sum(this);
    };
}
