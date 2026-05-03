var numberGame = function (nums) {
    nums.sort((a, b) => a - b); // step 1: sort
    let arr = [];

    for (let i = 0; i < nums.length; i += 2) {
        arr.push(nums[i + 1]); // Bob
        arr.push(nums[i]);     // Alice
    }

    return arr;
};

console.log(numberGame([5,4,2,3])); // [3,2,5,4]

----------------------------------------------------------------------
// 👉 Slightly better than your version:
// No extra array
// In-place swap
var numberGame = function (nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i += 2) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }

    return nums;
};
========================================================================================
    var numberGame = function (a) {
    a.sort((a, b) => a - b)

    let res = []
    while (a.length > 0) {
        let alice = a.shift()
        let bob = a.shift()
        res.push(bob, alice)
    }
    return res
};
