'use strict'

function fizzBuzz(start, end) {
  for (var i = start; i <= end; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function fizzBuzzImproved(start, end) {
  for (let i = start; i <= end; i++) {
    let line = "";
    if (i % 3 == 0) line += "Fizz";
    if (i % 5 == 0) line += "Buzz";
    console.log(line || i);
  }
}

fizzBuzzImproved(1, 100);
