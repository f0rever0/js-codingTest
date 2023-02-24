const fs = require("fs");
let input = fs.readFileSync("백준/Q1912/input.txt").toString().split("\n");
let n = input.shift();
let numbers = input
  .shift()
  .split(" ")
  .map((n) => Number(n));

const dp = [];
dp[0] = numbers[0];

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(numbers[i], dp[i - 1] + numbers[i]);
}

console.log(Math.max(...dp));
