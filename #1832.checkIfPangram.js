/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let sentenceSet = new Set();

    for(let i = 0; i < sentence.length; i++){
        let char = sentence.charAt(i);
        sentenceSet.add(char)
    }

    return sentenceSet.size === 26;
};

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    return new Set(sentence).size === 26;
};
