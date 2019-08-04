'use strict'

function loopingATriangle(n) {
  for (let i = 0, line = "#"; i < n; i++, line += "#") {
    console.log(line);
  }
}

loopingATriangle(7);
