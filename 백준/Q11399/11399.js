const fs = require('fs');
let input = fs.readFileSync('백준/Q11399/input.txt').toString().split('\n');
const peopleNumber = input[0]; // 사람들 총 인원 수 
let people = input[1].split(' ');
// console.log(people);

people = people.map((num)=> parseInt(num));

// 오름차순
// people.sort(function(a,b){
//     return a-b;
// });

// 화살표 함수로 간결하게
people.sort((a,b) => a - b)
// console.log(people);

let sum = 0;
for (var i = 1;  peopleNumber >= i; i++) {
    for(var j = 0; j < i; j++){
        sum = sum + people[j]
    }
}
console.log(sum);