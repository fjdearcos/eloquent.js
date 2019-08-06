'use strict'

function arrayToList(array) {
  return {value: array[0], rest: array.length == 1 ? null : arrayToList(array.slice(1))};
}

function listToArray(list) {
  if (list == null) {
    return [];
  } else {
    return [list.value].concat(listToArray(list.rest));
  } 
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, index) {
  if (!list) {
    return undefined;
  }
  return index == 0 ? list.value : nth(list.rest, index - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
