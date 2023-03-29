function solution(land) {
  let dp = new Array(land.length).fill(0);
  dp[0] = land[0];
  for (let i = 1; i < land.length; i++) {
    dp[i] = new Array(land[0].length).fill(0);
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      let max = Math.max(...dp[i - 1]);
      // 이전 행의 같은 열이 최댓값일때
      if (dp[i - 1].indexOf(max) == j) {
        // 이전 행의 같은 열의 값을 삭제한 배열에서의 최댓값
        let arr = dp[i - 1].filter((x, index) => index !== j);
        max = Math.max(...arr);
      }

      dp[i][j] = max + land[i][j];
    }
  }
  return Math.max(...dp[dp.length - 1]);
}
