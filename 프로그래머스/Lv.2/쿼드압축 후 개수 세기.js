const solution = (arr) => {
  const answer = [0, 0]; // 0과 1의 개수

  const divide = (x, y, n) => {
    if (n === 1) return answer[arr[x][y]]++;

    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (arr[x][y] !== arr[i][j]) {
          n = n / 2;

          divide(x, y, n);
          divide(x + n, y, n);
          divide(x, y + n, n);
          divide(x + n, y + n, n);
          
          return;
        }
      }
    }

    answer[arr[x][y]]++;

  };

  divide(0, 0, arr.length);

  return answer;
};
