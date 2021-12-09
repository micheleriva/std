export function last(arr) {
    return arr[arr.length - 1];
}
export function inherit() {
    Array.prototype.last = function() {
        return last(this);
    };
}
