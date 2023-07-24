const solution = (expression) => {
  // 연산자 순열
  const permutations = getPermutations(["+", "-", "*"], 3);
  let max = 0;

  permutations.forEach((permutation) => {
    const numbers = [...expression.split(/(\D)/)];
    permutation.forEach((oper) => {
      while (numbers.includes(oper)) {
        let i = numbers.indexOf(oper);
        let c = calculate(numbers[i], numbers[i - 1], numbers[i + 1]);
        numbers.splice(i - 1, 3, c);
      }
    });
    if (Math.abs(numbers[0]) > max) max = Math.abs(numbers[0]);
  });

  return max;
};

function calculate(oper, a, b) {
  switch (oper) {
    case "*":
      return Number(a) * Number(b);
    case "+":
      return Number(a) + Number(b);
    case "-":
      return Number(a) - Number(b);
  }
}

function getPermutations(array, number) {
  let results = [];
  if (number === 1) return array;

  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, number - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}
