function colorSort(arr) {
  let red = 0,
    white = 0,
    blue = arr.length - 1;

  while (white <= blue) {
    switch (arr[white]) {
      case 0:
        [arr[white], arr[red]] = [arr[red], arr[white]];
        red++;
        white++;
        break;

      case 1:
        white++;
        break;

      case 2:
        [arr[white], arr[blue]] = [arr[blue], arr[white]];
        blue--;
        break;
    }
  }

  return arr;
}

let a = [2, 0, 1, 1, 0, 1, 2, 2, 1, 0, 2];
console.log(colorSort(a));
