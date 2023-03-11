const solution = (arr) => {
  const n = arr.length;
  // 최대 공약수
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  // 최소 공배수
  const lcm = (a, b) => (a * b) / gcd(a, b);

  for (let i = 0; i < n - 1; i++) {
    arr[i + 1] = lcm(arr[i], arr[i + 1]);
  }
  return arr[n - 1];
};
