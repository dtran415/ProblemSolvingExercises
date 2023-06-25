function freqCounter(str) {
    const freq = {};
    for (let letter of str) {
        freq[letter] = (freq[letter] + 1) || 1;
    }

    return freq;
}

module.exports = freqCounter;