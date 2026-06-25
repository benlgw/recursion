// ts-worksheet-with-variables
function mergeSort(array) {
    const sorted = [];
    if (array.length <= 1) return array;

    const left = mergeSort(array.slice(0, Math.floor(array.length / 2)));
    const right = mergeSort(array.slice(Math.floor(array.length / 2), array.length));

    while (left.length && right.length) {
        sorted.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return [...sorted, ...left, ...right];
}
