const fs = require('fs');
let input = fs.readFileSync('백준/Q11047/input.txt').toString().split('\n');
const coin_number = input[0].split(' ')[0] // 가지고 있는 동전은 총 종류
let cost = input[0].split(' ')[1] // 만들어야하는 동전의 총 합(금액)
console.log(coin_number);
console.log(cost);

let coinList = input.slice(1,);
coinList = coinList.map((el)=> parseInt(el));
coinList.reverse(); // 큰 수부터 역순으로 
console.log(coinList);


let count = 0;
for(let i = 0; i <= coinList.length; i++){
    if (coinList[i] <= cost) {
        count += parseInt(cost / coinList[i]) // 금액을 거스름돈으로 나눈 몫(사용된 거스름돈 개수)
        cost = cost % coinList[i]; // 금액을 거스름돈으로 나눈 나머지
    }
}
console.log(count)