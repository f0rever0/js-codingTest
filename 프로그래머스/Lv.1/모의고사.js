const solution = (answers) => {
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (student1[i % 5] === answers[i]) score[0]++;
    if (student2[i % 8] === answers[i]) score[1]++;
    if (student3[i % 10] === answers[i]) score[2]++;
  }

  let result = [];
  score.forEach((item, index) => {
    if (item === Math.max(...score)) result.push(index + 1);
  });
  return result;
};
