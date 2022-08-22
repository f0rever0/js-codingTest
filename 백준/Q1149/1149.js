const fs = require('fs');
let input = fs.readFileSync('백준/Q1149/input.txt').toString().split('\n');
const n = parseInt(input[0].split(' ')[0]) // 물이 새는 곳의 갯수
const l = parseInt(input[0].split(' ')[1]) // 테이프의 길이
let location_list = input[1].split(' ');

location_list = location_list.map((num) => parseInt(num));
location_list.sort((a,b) => a - b) // 오름차순

let start = location_list[0]+0.5;
location_list.shift() // 0번째 요소( 첫번째 요소 ) 삭제
let count = 1;

for (let location of location_list) {
    if (start+l >= location+0.5){
        continue
    }
    else{
        start  = location-0.5
        count = count+1
    }
}

console.log(count)

