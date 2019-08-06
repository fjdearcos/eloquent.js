'use strict'

function reverseArray(array) {
  let reversed = [];
  for (let value of array) {
    reversed.unshift(value);
  }
  return reversed;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let tmp = array[i];
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = tmp;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
