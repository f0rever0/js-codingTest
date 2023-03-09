const solution = (A, B) => {
  let sum = 0;

  // A에서는 최솟값, B에서는 최댓값을 뽑아서 곱함
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  A.forEach((number, index) => (sum += number * B[index]));

  return sum;

  // 더 간결하게
  // return A.reduce((sum, number, index) => sum + (number * B[index]), 0)
};
