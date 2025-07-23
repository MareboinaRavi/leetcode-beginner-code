// 1431
const arr = [2, 3, 5, 1, 3];
const extraC = 3;
let greatNo = 0;
let result = [];
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  if (item > greatNo) {
    greatNo = item;
  }
}
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  result.push(item + extraC >= greatNo);
}
console.log('text', result);
