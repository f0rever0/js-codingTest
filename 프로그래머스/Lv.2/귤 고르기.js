const solution = (k, tangerine) => {
  const obj = {};

  tangerine.forEach((n) => {
    obj[n] ? obj[n]++ : (obj[n] = 1);
  });

  // 내림차순으로 정렬
  const kind = Object.values(obj).sort((a, b) => b - a);

  // 종류 갯수
  let count = 0;
  // 총 귤 갯수
  let sum = 0;

  for (let i = 0; i < kind.length; i++) {
    count++;
    sum += kind[i];
    if (sum >= k) return count;
  }

  return kind;
};
