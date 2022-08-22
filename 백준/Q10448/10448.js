const fs = require('fs');
let input = fs.readFileSync('백준/Q10448/input.txt').toString().split('\n');
const num = input[0] // 입력한 총 갯수
let nums = input.slice(1,);

let tri_list=[]; //k의 최댓값은 1000이니 1000까지의 모든 삼각수를 구해 tri_list[]에 담기
for(var i = 1; i < 45; i++){
    tri_list.push(i * (i + 1) / 2)
}

let result = 0;

for(i of nums){
    result = 0;
    for (one of tri_list){
        for (two of tri_list){
            for (three of tri_list){
                if (one + two + three === parseInt(i)){
                    result = 1;
                }
            }
        }
    }
    console.log(result)
}