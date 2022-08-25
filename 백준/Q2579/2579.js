const fs = require('fs');
let input = fs.readFileSync('백준/Q2579/input.txt').toString().split('\n');
const num = input[0]
let stairs_list = []
let dp = []
for(let i = 0; i<num ; i++){
    stairs_list.push(input[i+1])
}

for(let i = 0; i<num ; i++){
    dp.push(0)
}

stairs_list = stairs_list.map((num) => parseInt(num));

dp[0] = stairs_list[0]
dp[1] = stairs_list[0]+ stairs_list[1]
dp[2] = Math.max(stairs_list[0]+ stairs_list[2], stairs_list[1]+ stairs_list[2])
for(let i = 3; i<num; i++){
    dp[i] = Math.max(dp[i - 3] + stairs_list[i - 1] + stairs_list[i], dp[i - 2] + stairs_list[i])
}
console.log(dp[num-1])