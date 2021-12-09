export function toList(str) {
    return str.split('');
}
export function inherit() {
    String.prototype.toList = function() {
        return this.split('');
    };
}
