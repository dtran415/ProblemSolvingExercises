const freqCounter = require("./freqCounter");

function sameFrequency(num1, num2) {
    const num1str = num1.toString();
    const num2str = num2.toString();

    if (num1str.length !== num2str.length)
        return false;

    const freq1 = freqCounter(num1str);
    const freq2 = freqCounter(num2str);

    for (let digit in freq1) {
        if (freq1[digit] !== freq2[digit])
            return false;
    }

    return true;
}

module.exports = sameFrequency;
