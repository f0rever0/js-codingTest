const solution = (num1, num2) => {
  // 최대 공약수
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  // 최소 공배수
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(num1, num2), lcm(num1, num2)];
};
