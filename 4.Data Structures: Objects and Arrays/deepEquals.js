'use strict'

function deepEqual(o1, o2) {
  if (!o1 && !o2) {
    return true;
  } else if (!o1) {
    return false;
  } else if (!o2) {
    return false;
  } else if (typeof(o1) == "object" && typeof(o2) == "object") {
    let props = Object.keys(o1);
    let result = props.length == Object.keys(o2).length;
    for (let i = 0; result && i < props.length; i++) {
      result = result && deepEqual(o1[props[i]], o2[props[i]]);
    }
    return result;
  } else {
    return o1 == o2;
  }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
