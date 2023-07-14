const solution = (number, k) => {
  let stack = [];

  number.split("").map((value) => {
    if (stack.length === 0) {
      stack.push(value);
    }

    while (k > 0 && stack[stack.length - 1] < value) {
      stack.pop();
      k--;
    }

    stack.push(value);
  });

  stack.splice(stack.length - k, k);
  let answer = stack.join("");

  return answer;
};

// ! 10번 케이스에서 시간 초과
// const solution = (number, k) => {
//   let array = number.split("");
//   let pickNumber = array.length - k;

//   let combinationList = [];
//   let start = 0;
//   let end = array.length - pickNumber + 1;

//   while (combinationList.length !== pickNumber) {
//     if (end === array.length && end - start === 1) {
//       combinationList.push(array[array.length - 1]);
//       break;
//     }

//     let max;
//     let temp = array.slice(start, end);
//     if (temp.includes("9")) {
//       max = 9;
//     } else {
//       max = Math.max(...temp);
//     }
//     combinationList.push(max);
//     start += temp.indexOf(String(max)) + 1;
//     end++;
//   }

//   return combinationList.join("");
// };
