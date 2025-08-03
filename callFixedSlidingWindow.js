function callFixedSlidingWindow(arr,k){
  let maxSum=0,windowSum=0;
  for(let i=0;i<k;i++){
   windowSum+=arr[i];
  }
  maxSum=windowSum;
  for(let end=k;end<arr.length;end++){
    windowSum+=arr[end]-arr[end-k]; // add next, remove first
    Math.max(windowSum,)
  }
  return maxSum
}


console.log(callFixedSlidingWindow([1,2,3,4,5,6,7,8,9],2))
