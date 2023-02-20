const solution = (n) => {
  if (n === 0) return 0;

  let divisorList = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) divisorList.push(i);
  }
  return divisorList.reduce((sum, number) => (sum + number, 0));
};
