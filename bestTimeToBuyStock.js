function bestTimeToBuyStock(a) {
  let max = 0;

  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      let profit = a[j] - a[i];
      if (profit > max) {
        max = profit;
      }
    }y
  }

  return max;Hy
}

const arr = [7, 1, 5, 3, 6, 4];
console.log(bestTimeToBuyStock(arr)); // 5

// OPTIMISED
function bestTimeToBuyStock(a) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] < minPrice) {
      minPrice = a[i];               // best day to buy so far
    } else {
      let profit = a[i] - minPrice;  // sell today
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}

const arr = [7, 1, 5, 3, 6, 4];
console.log(bestTimeToBuyStock(arr)); // 5

