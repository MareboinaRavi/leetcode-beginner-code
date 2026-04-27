function colorSort(arr) {
  let low = 0,
    mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    switch (arr[mid]) {
      case 0:
        [arr[mid], arr[low]] = [arr[low], arr[mid]];
        mid++;
        low++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
        break;
    }
  }
  return arr;
}

let a = [2, 0, 1, 1, 0, 1, 2, 2, 1, 0, 2];
console.log(colorSort(a));
