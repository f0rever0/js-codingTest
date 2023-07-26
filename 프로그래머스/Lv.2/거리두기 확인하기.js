const solution = (places) => {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const SIZE = places.length;
  const isValid = (x, y) => x >= 0 && y >= 0 && x < SIZE && y < SIZE;

  function checkMatirx(rowIndex, colIndex, depth, place, isVisited) {
    let queue = [[rowIndex, colIndex, depth]];

    while (queue.length > 0) {
      const [x, y, depth] = queue.shift();

      if (depth !== 0 && place[x][y] === "P") return false; // 거리두기 X

      for (let i = 0; i < 4; i++) {
        const r = x + dx[i];
        const c = y + dy[i];

        if (
          isValid(r, c) &&
          isVisited[r][c] === false &&
          place[r][c] !== "X" &&
          depth < 2
        ) {
          isVisited[r][c] = true;
          queue.push([r, c, depth + 1]);
        }
      }
    }

    return true; // 거리두기 O
  }

  return places.map((place) => {
    let isVisited = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));

    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        if (place[i][j] === "P") {
          isVisited[i][j] = true;
          if (!checkMatirx(i, j, 0, place, isVisited)) return 0;
        }
      }
    }

    return 1;
  });
};
