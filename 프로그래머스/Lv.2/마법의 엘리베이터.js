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
