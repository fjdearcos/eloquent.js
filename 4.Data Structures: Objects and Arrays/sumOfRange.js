'use strict'

function range(start, end, step = start <= end ? 1 : -1) {
  let arr = [];
  let steps = (end - start) / step + 1;
  for (let i = 0, num = start; i < steps; i++, num += step) {
    arr.push(num);
  }
  return arr;
}

function sum(values) {
  let result = 0;
  for (let num of values) {
    result += num;
  }
  return result;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
