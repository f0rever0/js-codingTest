function BFS(start, matrix, end) {
  let count = 0;
  let moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let queue = [start];
  matrix[start[0]][start[1]] = "X";

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      let [curX, curY] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let [dx, dy] = moves[j];
        let nx = curX + dx;
        let ny = curY + dy;
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < matrix.length &&
          ny < matrix[0].length &&
          matrix[nx][ny] !== "X"
        ) {
          if (matrix[nx][ny] === end) {
            return count + 1;
          }

          queue.push([nx, ny]);
          matrix[nx][ny] = "X";
        }
      }
    }
    count++;
  }
  return -1;
}

function solution(maps) {
  // S => L => E
  let startIndex = [];
  let leverIndex = [];
  let maps1 = maps.map((item) => item.split(""));
  let maps2 = maps.map((item) => item.split(""));

  maps.forEach((map, index) => {
    if (map.includes("S")) {
      startIndex = [index, map.indexOf("S")];
    }
    if (map.includes("L")) {
      leverIndex = [index, map.indexOf("L")];
    }
  });

  // S => L
  let firstRoot = BFS(startIndex, [...maps1], "L");
  // L => E
  let secondRoot = BFS(leverIndex, [...maps2], "E");

  if (firstRoot === -1 || secondRoot === -1) return -1;

  return firstRoot + secondRoot;
}
