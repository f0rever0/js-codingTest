const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");
const T = input[0]; // 테스트 케이스의 개수

for (let i = 1; i <= T; i++) {
  let N = input[i];
  let arr = [1, 1, 1];
  for (let j = 3; j < N; j++) {
    arr.push(arr[j - 2] + arr[j - 3]);
  }
  console.log(arr[arr.length - 1]);
}
