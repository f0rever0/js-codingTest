function solution(storey) {
  // 올림 자리 0 추가
  let numberList = [
    0,
    ...storey
      .toString()
      .split("")
      .map((n) => Number(n)),
  ];

  let count = 0;

  for (let index = numberList.length - 1; index >= 0; index--) {
    let number = numberList[index];
    if (number < 5) {
      count += number;
    } else if (number > 5) {
      count += 10 - number;
      numberList[index - 1] = numberList[index - 1] + 1;
    } else {
      // number === 5
      if (numberList[index - 1] < 5) {
        count += number;
      } else {
        count += 10 - number;
        numberList[index - 1] = numberList[index - 1] + 1;
      }
    }
  }

  return count;
}

/*
function solution(storey) {
  let num = storey;
  let count = 0;

  while (num !== 0) {
    if (Math.abs(up(num) - num) >= Math.abs(down(num) - num)) {
      count += Number(down(num).toString().split("")[0]);
      num = Math.abs(down(num) - num);
    } else {
      count += Number(up(num).toString().split("")[0]);
      num = Math.abs(up(num) - num);
    }
  }

  return count;
}

function up(number) {
  // 올림
  let uplist = [];
  let numberlist = [...number.toString().split("")];
  for (let i = 0; i < numberlist.length; i++) {
    if (i === 0) {
      uplist.push(Number(numberlist[i]) + 1);
    } else {
      uplist.push(0);
    }
  }
  return uplist.join("");
}

function down(number) {
  // 버림
  let downlist = [];
  let numberlist = [...number.toString().split("")];
  for (let i = 0; i < numberlist.length; i++) {
    if (i === 0) {
      downlist.push(Number(numberlist[i]));
    } else {
      downlist.push(0);
    }
  }
  return downlist.join("");
}
*/
