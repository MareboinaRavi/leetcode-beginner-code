function minSubArrayLen(target, arr) {
  let start = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    // Shrink the window while the condition is true
    while (sum >= target) {
      minLen = Math.min(minLen, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen(8, [2, 3, 1, 2, 4, 3])); // Output: 2
