export default function(array, callback, scope) {
    const nodes = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof callback === 'function') {
            callback.call(scope, array[i], i, array); // passes back stuff we need
        }
        nodes.push(array[i]);
    }
    return nodes;
}
