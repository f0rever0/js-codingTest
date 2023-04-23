const solution = (m, n, board) => {
  board = board.map((item) => item.split(""));
  const crash = [
    [0, 0],
    [0, -1],
    [-1, 0],
    [-1, -1],
  ];
  while (true) {
    let crashed = [];

    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i][j - 1] &&
          board[i][j] === board[i - 1][j] &&
          board[i][j] === board[i - 1][j - 1]
        ) {
          crashed.push([i, j]);
        }
      }
    }

    if (crashed.length === 0)
      return [].concat(...board).filter((value) => value === 0).length;

    crashed.forEach((a) => {
      crash.forEach(([x, y]) => {
        board[a[0] + x][a[1] + y] = 0;
      });
    });

    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some((value) => value === 0)) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && board[i][j] === 0; k--) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
};
