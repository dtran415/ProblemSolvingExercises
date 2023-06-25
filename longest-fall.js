
function longestFall(arr=[]) {
    if (arr.length === 0)
        return 0;

    let longest = 1;
    let count = 1;

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1])
            count++;
        else {
            // previous wasn't bigger, check if current fall was longer
            longest = Math.max(count, longest);
            count = 1;
        }
    }

    // check the latest count
    longest = Math.max(count, longest);

    return longest;
}

module.exports = longestFall;