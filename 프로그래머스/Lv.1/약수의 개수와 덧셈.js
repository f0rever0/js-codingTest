const solution = (left, right) => {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    // i 가 제곱수이면 약수가 홀수개
    !Number.isInteger(Math.sqrt(i)) ? (sum += i) : (sum -= i);
  }
  return sum;
};
