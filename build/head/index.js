export function head(arr) {
    return arr === null || arr === void 0 ? void 0 : arr[0];
}
export function inherit() {
    Array.prototype.head = function() {
        return head(this);
    };
}
