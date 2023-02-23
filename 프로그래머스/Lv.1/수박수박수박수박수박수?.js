const solution = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    i % 2 ? result.push("수") : result.push("박");
  }

  return result.join("");

  // 더 간결하게
  // return "수박".repeat(n/2) + (n%2 ? '수' : '');
};
