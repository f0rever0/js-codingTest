const fs = require('fs');
let input = fs.readFileSync('백준/Q1476/input.txt').toString().split(' ');
const E = input[0];
const S = input[1];
const M = input[2];

let count = 1;

while (true) {
    if (
        (count - E) % 15 === 0 &&
        (count - S) % 28 === 0 &&
        (count - M) % 19 === 0
    ) {
        console.log(count);
        break;
    }
    count++;
}