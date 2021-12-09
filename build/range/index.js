function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
export function range(from, to) {
    var step = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    return _toConsumableArray(Array(Math.floor((to - from) / step) + 1)).map(function(_, i) {
        return from + i * step;
    });
}
export function inherit() {
    Array.prototype.range = function(from, to, step) {
        return range(from, to, step);
    };
}
