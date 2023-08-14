function solution(k, d) {
  let count = 0;

  for (let x = 0; x <= d; x = x + k) {
    let y = parseInt(Math.sqrt(d ** 2 - x ** 2));
    count += parseInt(y / k) + 1;
  }
  return count;
}

// ! 시간 초과
/*
function solution(k, d) {
  let count = 0;

  for (let i = 0; i <= d; i++) {
    let x = i * k;
    for (let j = 0; j <= d; j++) {
      let y = j * k;
      if (d ** 2 >= x ** 2 + y ** 2) count++;
    }
  }
  return count;
}
*/
