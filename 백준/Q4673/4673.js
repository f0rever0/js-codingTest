let notSelfNumber_list = [] // 셀프넘버가 아닌 수들의 집합

for(let number= 1; number < 10001; number++){
    let result = 0

    for(let i=0; i<String(number).length;i++){   //  number 각 자리 수 더하기
        result += Number(String(number).charAt(i));
    }
    result += number; // number 더하기

    if(result <= 10000){
        notSelfNumber_list.push(result)
    }
}

for (let j=1; j<10001; j++){
    if(!notSelfNumber_list.includes(j)){
        console.log(j)
    }
}
