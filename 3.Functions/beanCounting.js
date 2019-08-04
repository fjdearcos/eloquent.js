'use strict'

function countChar(word, char) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == char) count++;
  }
  return count;
}

const countBs = word => countChar(word, "B");

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
