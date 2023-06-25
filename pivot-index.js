
function pivotIndex(arr) {
    // add all numbers in the array
    const sum = arr.reduce((acc, num) => acc + num, 0);

    let result = -1;

    // keep track of sum so far
    let sum2 = arr[0];
    
    for(let i = 1; i < arr.length; i++) {
        // if we remove the pivot and divide by 2 and it equals the sum so far then we found the pivot
        if ((sum - arr[i]) / 2 === sum2)
            return i;

        sum2 += arr[i];
    }

    return result;
}

module.exports = pivotIndex;