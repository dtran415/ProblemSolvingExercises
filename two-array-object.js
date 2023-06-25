
function twoArrayObject(arr1, arr2) {
    const result = {};
    let i = 0;
    while (i < arr1.length) {
        const key = arr1[i];
        const value = arr2[i] || null;
        result[key] = value;
        i++;
    }

    return result;
}

module.exports = twoArrayObject;