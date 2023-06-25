const freqCounter = require("./freqCounter");

function constructNote(message, letters) {
    // if not enough letters always false
    if (message.length > letters.length)
        return false;

    const freqMessage = freqCounter(message);
    const freqLetters = freqCounter(letters);

    for (let letter in freqMessage) {
        // if no letters for specific letter or more letters required than given return false
        if (!freqLetters[letter] || freqMessage[letter] > freqLetters[letter])
            return false;
    }

    return true;
}



module.exports = constructNote;