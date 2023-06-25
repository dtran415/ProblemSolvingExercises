
function countPairs(arr, target) {
    let result = 0;
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i];
        // if the difference has been seen then a pair was found
        if (map[diff])
            result++;
        // keep track of which numbers have been seen
        map[arr[i]] = true;
    }

    return result;
}

module.exports = countPairs;