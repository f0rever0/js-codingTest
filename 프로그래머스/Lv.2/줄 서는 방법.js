// ! 시간 초과
const solution = (n, k) => {
  let obj = [];
  for (let i = 1; i <= n; i++) {
    obj.push(String(i));
  }
  let answer = [];
  getPermutations(obj, n)[k - 1].forEach((item) => {
    answer.push(Number(item));
  });
  return answer;
};

const getPermutations = function (array, number) {
  let results = [];
  if (number === 1) return array;

  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, number - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};
