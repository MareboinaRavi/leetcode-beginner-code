var countDigits = function(num) {
    let count = 0;
    let original = num;

    while (num > 0) {
        let digit = num % 10; // get last digit

        if (digit !== 0 && original % digit === 0) {
            count++;
        }

        num = Math.floor(num / 10); // remove last digit
    }

    return count;
};
