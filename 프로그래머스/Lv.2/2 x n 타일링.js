const solution = (n) => {
  let result = [1, 2];
  for (let i = 2; i < n; i++) {
    result.push((result[i - 2] + result[i - 1]) % 1000000007);
  }
  return result[n - 1];
};
