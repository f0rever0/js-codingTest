const fs = require('fs');
let input = fs.readFileSync('Q2438/input.txt').toString();
console.log(input);

// 반복문
let star = "";
for (let i = 0; i < input; i++) {
    star += "*"
    console.log(star); 
};

// repeat
star = "";
for (let i = 1; i <= input; i++) {
    star= '*'.repeat(i);
    console.log(star);
};