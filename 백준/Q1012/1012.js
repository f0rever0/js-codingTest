// https://www.acmicpc.net/problem/1012

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
// let input = fs.readFileSync("dev/stdin").toString();

let test = input[0]; // 테스트 케이스 개수

for (let i = 0; i < test; i++) {
  // 테스트 실행
  let [row, col, count] = input[1].split(" ").map(Number); // 2차원 배열 만들기
  console.log(row, col);
  let array = new Array(row).fill(new Array(col).fill(0));
  console.log(array);
}

// 총 개수 : 0으로 둘러싸인 1의 개수
console.log(input);
