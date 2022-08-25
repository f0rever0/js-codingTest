const fs = require('fs');
let input = fs.readFileSync('백준/Q1010/input.txt').toString().split('\n');
const num = input[0];

function factorial(n) {
    return n ? n * factorial(n - 1) : 1; // 조건문에서 true = 1, false = 0
}

for (let i = 0; i < num; i++){
    let west = parseInt(input[i+1].split(' ')[0]);
    let east = parseInt(input[i+1].split(' ')[1]);
    bridge = factorial(east) / (factorial(west) * factorial(east - west))
    console.log(parseInt(bridge))
}