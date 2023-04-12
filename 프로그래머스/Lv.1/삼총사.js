// const solution = (number) => {
//   let answer = 0;
//   for (let i = 0; i < number.length; i++) {
//     for (let j = i + 1; j < number.length; j++) {
//       for (let k = j + 1; k < number.length; k++)
//         if (number[i] + number[j] + number[k] === 0) answer++;
//     }
//   }
//   return answer;
// };

// 다른 풀이
const solution = (number) => {
  let result = 0;

  const recursion = (startIndex, sum, count) => {
    if (count === 3) {
      sum === 0 && result++;
      return;
    }

    for (let i = startIndex; i < number.length; i++) {
      recursion(i + 1, sum + number[i], count + 1);
    }
  };
  recursion(0, 0, 0);
  return result;
};
