const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
// let input = fs.readFileSync("dev/stdin").toString().split("\n");

let row = input[0]; // 최초 격자 수
let array = []; // 격자
input.slice(1).forEach((row) => array.push(row));

const quadTreeResult = [];

function recursion(n, x, y) {
  let isAllSameNumber = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      isAllSameNumber.add(array[y + j][x + i]);
    }
  }

  if (isAllSameNumber.size === 1) {
    isAllSameNumber.has("0") ? quadTreeResult.push(0) : quadTreeResult.push(1);
  } else {
    n = n / 2;
    quadTreeResult.push("(");
    recursion(n, x, y);
    recursion(n, x + n, y);
    recursion(n, x, y + n);
    recursion(n, x + n, y + n);
    quadTreeResult.push(")");
  }
}

recursion(row, 0, 0);
console.log(quadTreeResult.join(""));
