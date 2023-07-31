const solution = (maps) => {
  maps = maps.map((row) => row.split(""));
  let answer = [];

  const dfs = (dx, dy) => {
    if (
      dx < 0 ||
      dy < 0 ||
      dx >= maps.length ||
      dy >= maps[0].length ||
      maps[dx][dy] === "X"
    )
      return 0;
    const current = Number(maps[dx][dy]);
    maps[dx][dy] = "X";
    return (
      current +
      dfs(dx - 1, dy) +
      dfs(dx + 1, dy) +
      dfs(dx, dy - 1) +
      dfs(dx, dy + 1)
    );
  };

  maps.forEach((row, rowIndex) => {
    row.forEach((element, colIndex) => {
      if (element !== "X") answer.push(dfs(rowIndex, colIndex));
    });
  });

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
};
