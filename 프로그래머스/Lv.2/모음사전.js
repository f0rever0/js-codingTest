const solution = (word) => {
  let answer = 0;
  const aeiou = ["A", "E", "I", "O", "U"];

  const cal = (index) => {
    let sum = 0;
    for (let i = 4 - index; i >= 0; i--) {
      sum += 5 ** i;
    }
    return sum;
  };

  [...word].forEach((item, index) => {
    answer += cal(index) * aeiou.indexOf(item) + 1;
  });

  return answer;
};
