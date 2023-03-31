const solution = (maps) => {
  // 최단 거리 구하기 -> bfs
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  const queue = [];
  queue.push([0, 0, 1]); // [y좌표, x좌표, 이동횟수]

  while (queue.length) {
    const [currentY, currentX, count] = queue.shift();
    if (currentY === maps.length - 1 && currentX === maps[0].length - 1)
      return count;

    for (let i = 0; i < 4; i++) {
      const ny = currentY + dy[i];
      const nx = currentX + dx[i];
      if (
        ny >= 0 &&
        ny < maps.length &&
        nx >= 0 &&
        nx < maps[0].length &&
        maps[ny][nx] === 1
      ) {
        queue.push([ny, nx, count + 1]);
        maps[ny][nx] = 0;
      }
    }
  }

  return -1;
};
