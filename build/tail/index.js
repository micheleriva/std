function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
}
export function tail(array) {
    var _array = _toArray(array), _ = _array[0], tail1 = _array.slice(1);
    return tail1 !== null && tail1 !== void 0 ? tail1 : [];
}
export function inherit() {
    Array.prototype.tail = function() {
        return tail(this);
    };
}
