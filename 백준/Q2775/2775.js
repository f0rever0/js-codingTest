const fs = require("fs");
let input = fs.readFileSync("백준/Q2775/input.txt").toString().split("\n");

const T = input[0];
// k와 n의 배열

let array = [];
for (let i = 1; i < T * 2; i += 2) {
  array.push([Number(input[i]), Number(input[i + 1])]);
}

for (let i = 0; i < array.length; i++) {
  // k - 층,  n - 호
  k = array[i][0];
  n = array[i][1];

  const apartment = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  apartment[0].forEach((_, index) => (apartment[0][index] = index));

  for (let j = 1; j <= k; j++) {
    for (let l = 1; l <= n; l++) {
      apartment[j][l] = apartment[j - 1][l] + apartment[j][l - 1];
    }
  }

  console.log(apartment[k][n]);
}
