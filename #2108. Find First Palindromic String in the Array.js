/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    const isPalindrom = (word) => {
        let left = 0;
        let right = word.length-1

        while(left <= Math.floor(word.length/2)){
            if(word[left] !== word[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    for(let word of words){
        if(isPalindrom(word)) return word;
    }
    return ""
    
};

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let ele of words){
        if(ele === ele.split("").reverse().join("")){
            return ele
        }
    }
    return ""
};
