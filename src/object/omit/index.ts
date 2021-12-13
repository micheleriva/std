export function omit<T = Object>(obj: Object, key: string): T {
    delete (obj as any)[key];
    return obj as T;
}

export function inherit() {
    Object.prototype.omit = function<T>(key: string): T {
        return omit(this, key);
    };
}

export default omit;
