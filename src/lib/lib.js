export const all = (array, fn) => {
    return array.filter(fn).length === array.length;
};

export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
