function solution(weights) {
  let count = 0;
  const map = new Map();
  const ratios = [2 / 3, 2 / 4, 3 / 4, 1];

  weights
    .sort((a, b) => a - b)
    .forEach((weight) => {
      ratios.forEach((ratio) => {
        if (map.has(weight * ratio)) count += map.get(weight * ratio);
      });
      map.set(weight, (map.get(weight) || 0) + 1);
    });

  return count;
}
