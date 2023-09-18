const solution = (maps) => {
  const moves = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let queue = [[0, 0, 1]];
  const endNode = [maps.length - 1, maps[0].length - 1];

  while (queue.length !== 0) {
    let [curX, curY, count] = queue.shift();

    if (curX === endNode[0] && curY === endNode[1]) {
      return count;
    }

    moves.forEach((move) => {
      let x = curX + move[0];
      let y = curY + move[1];

      if (
        x >= 0 &&
        x < maps.length &&
        y >= 0 &&
        y < maps[0].length &&
        maps[x][y] === 1
      ) {
        queue.push([x, y, count + 1]);
        maps[x][y] = 0;
      }
    });
  }
  return -1;
};
