const solution = (k, dungeons) => {
  let maxClearCount = 0;
  let visited = Array(dungeons.length).fill(0);

  const dfs = (k, count) => {
    maxClearCount = Math.max(maxClearCount, count);

    for (let i = 0; i < dungeons.length; i++) {
      let [currentMinimum, currentConsumption] = dungeons[i];
      if (k >= currentMinimum && visited[i] === 0) {
        visited[i] = 1;
        dfs(k - currentConsumption, count + 1);
        visited[i] = 0;
      }
    }
  };

  dfs(k, 0);

  return maxClearCount;
};
