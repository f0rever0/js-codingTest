const solution = (n, k) => {
  const obj = new Array(n).fill(1).map((value, index) => value + index);
  let total = obj.reduce((acc, cul) => acc * cul, 1);
  let answer = [];

  function getNum(array) {
    total = total / array.length;
    const index = Math.ceil(k / total) - 1;
    k = k - index * total;
    return array[index];
  }

  for (let i = 0; i < n; i++) {
    const num = getNum(obj);
    obj.splice(obj.indexOf(num), 1);
    answer.push(num);
  }

  return answer;
};

// ! 시간 초과
// const solution = (n, k) => {
//   let obj = [];
//   for (let i = 1; i <= n; i++) {
//     obj.push(String(i));
//   }
//   let answer = [];
//   getPermutations(obj, n)[k - 1].forEach((item) => {
//     answer.push(Number(item));
//   });
//   return answer;
// };

// const getPermutations = function (array, number) {
//   let results = [];
//   if (number === 1) return array;

//   array.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     const permutations = getPermutations(rest, number - 1);
//     const attached = permutations.map((el) => [fixed, ...el]);
//     results.push(...attached);
//   });

//   return results;
// };
