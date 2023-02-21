const fs = require("fs");
let input = fs.readFileSync("백준/Q9625/input.txt").toString();

const K = parseInt(input);

// 초기값
let countA = 1;
let countB = 0;

for (let i = 1; i <= K; i++) {
  total = countA + countB;
  countA = countB;
  countB = total;
}

console.log(countA, countB);
