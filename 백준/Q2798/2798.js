const fs = require('fs');
let input = fs.readFileSync('백준/Q2798/input.txt').toString().split('\n');
const n = input[0].split(' ')[0] // 카드의 갯수
const m = input[0].split(' ')[1] // 넘지 않아야할 값
let card_list = input[1].split(' ');

let result = 0;

card_list = card_list.map((num) => parseInt(num));
console.log(card_list)

for(var i = 0; n-2 > i; i++){
    for(var j = i+1; n-1 > j; j++){
        for(var k = j+1; n > k; k++){
            if(card_list[i]+card_list[j]+card_list[k] > m){
                continue
            }
            else{
                result = Math.max(result, card_list[i]+card_list[j]+card_list[k]);
            }
        }
    }
}

console.log(result);
