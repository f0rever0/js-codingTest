const fs = require('fs');
let input = fs.readFileSync('Q1931/input.txt').toString().split('\n');
const meeting_number = input[0] // 회의의 수
console.log(meeting_number)

let hour = input.slice(1,);
console.log(hour);

// 2차원 배열로 변환
let hour_list = [];
for(i of hour){
    hour_list.push(i.split(' ').map((el) => parseInt(el)));
}
console.log(hour_list)

/*
score.sort(function(a, b) { // 오름차순
    return a - b;
});

score.sort(function(a, b) { // 내림차순
    return b - a;
});
*/

hour_list.sort(function(a,b){ // 시작시간이 같을 경우는 오름차순
    if(a[1] === b[1]){
        return a[0] - b[0]
    }
    else{
        return a[1] - b[1];
    }
})
console.log(hour_list)

let count = 1;
let end_time = hour_list[0][1];

// 두번째 회의부터, 회의 시작 끝나는 시간과 시작 시간 비교
for(let i = 1; i < meeting_number; i++){
    if(end_time <= hour_list[i][0]){
        end_time = hour_list[i][1];
        count += 1;
    }
}
console.log(count);