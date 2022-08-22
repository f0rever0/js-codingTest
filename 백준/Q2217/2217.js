const fs = require('fs');
let input = fs.readFileSync('백준/Q2217/input.txt').toString().split('\n');
const n = input[0]
let rope_list = []
let w_list = []

for (var i = 0; i < n; i++){
    rope_list.push(input[i+1])
}

rope_list = rope_list.map((num) => parseInt(num));

rope_list.reverse();

for (var j = 0; j < n; j++){
    w_list.push(rope_list[j]*(j+1))
}

console.log(Math.max(...w_list)) // 배열에서 최댓값 찾기