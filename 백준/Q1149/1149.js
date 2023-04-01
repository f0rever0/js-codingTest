const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");
const price = [];
for (let i = 1; i <= input[0]; i++) {
  let temp = input[i].split(" ").map((item) => Number(item));
  price.push(temp);
}

let dp = price;

for (let i = 1; i < price.length; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + price[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + price[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + price[i][2];
}

console.log(Math.min(...dp[dp.length - 1]));
