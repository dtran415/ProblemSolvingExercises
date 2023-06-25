
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // if left side is negative and right side is positive, swap positions
        if (arr[left] < 0 && arr[right] > 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        } else if (arr[left] > 0) { // if left side is positive move left pointer up
            left++;
        } else { // if left is not positive and doesn't need to be swapped move right side
            right--;
        }
    }

    return arr;
}

module.exports = separatePositive;
