const solution = (n) => {
  let numberList = n.toString().split("");
  let a = [];
  for (let i = numberList.length - 1; i >= 0; i--) {
    a.push(numberList[i]);
  }
  return a.map((s) => parseInt(s));

  // 더 간략하게
  // return (n+"").split("").reverse().map(v => parseInt(v));
};

// 다른 사람 풀이
function solution(n) {
  // 숫자풀이
  var arr = [];

  do {
    arr.push(n % 10); // 나머지를 이용해 자연수의 자릿수를 뒤집음
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
