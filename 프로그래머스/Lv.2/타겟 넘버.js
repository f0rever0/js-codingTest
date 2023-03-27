const solution = (numbers, target) => {
  let answer = 0;

  const dfs = (currentCalculateIndex, sum) => {
    if (currentCalculateIndex === numbers.length) {
      if (target === sum) answer++;
    } else {
      dfs(currentCalculateIndex + 1, sum + numbers[currentCalculateIndex]);
      dfs(currentCalculateIndex + 1, sum - numbers[currentCalculateIndex]);
    }
  };

  dfs(0, 0);
  return answer;
};
