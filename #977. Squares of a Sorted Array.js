977. Squares of a Sorted Array
var sortedSquares = function(nums) {
    let n = nums.length;
    let result = new Array(n);

    let left = 0;
    let right = n - 1;
    let pos = n - 1;

    while (left <= right) {
        let leftSq = nums[left] * nums[left];
        let rightSq = nums[right] * nums[right];

        if (leftSq > rightSq) {
            result[pos] = leftSq;
            left++;
        } else {
            result[pos] = rightSq;
            right--;
        }

        pos--;
    }

    return result;
};

console.log(sortedSquares([-4,-1,0,3,10]));
