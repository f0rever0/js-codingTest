const fs = require('fs');
let input = fs.readFileSync('백준/Q1543/input.txt').toString().split('\n');
let document = input[0];
const text = input[1];

let count = 0;

while(document.search(text) > -1){
    document = document.substr(document.search(text)+text.length)
    count = count+1
}

console.log(count)
