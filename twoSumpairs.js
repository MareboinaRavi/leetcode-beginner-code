function uniquePairs(nums, target) {
    const seen = new Set();
    const pairs = [];

    for (let num of nums) {
        const complement = target - num;
        if (seen.has(complement)) {
            // const pair = [num, complement].sort((a, b) => a - b);
            const pair = [num, complement];
            // pairs.add(pair.join(','));
            pairs.push(pair);
        }
        seen.add(num);
    }
    // return Array.from(pairs).map(p => p.split(',').map(Number));
    return pairs;
}
console.log(uniquePairs([1,2,3,4,5,6,7,8,9],11))
