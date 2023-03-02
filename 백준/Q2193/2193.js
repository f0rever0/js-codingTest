const fs = require("fs");
let n = fs.readFileSync("백준/Q2193/input.txt");

// 0,1 자리수에서 이친수 중 0과 1의 갯수
let dp = [
  [0, 0],
  [0, 1],
];

for (let i = 2; i <= n; i++) {
  dp[i] = [BigInt(dp[i - 1][0] + dp[i - 1][1]), BigInt(dp[i - 1][0])];
}

console.log(BigInt(dp[n][0] + dp[n][1]).toString());
