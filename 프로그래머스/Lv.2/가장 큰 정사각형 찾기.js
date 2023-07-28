function solution(board) {
  const SIZE = board.length;
  let map = Array.from({ length: SIZE }, () => Array(board[0].length).fill(0));
  let answer = 0;

  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < board[0].length; j++) {
      checkArea(i, j);
    }
    if (answer < Math.max(...map[i])) answer = Math.max(...map[i]);
  }

  function checkArea(i, j) {
    if (i === 0 || j === 0 || board[i][j] === 0) {
      // 0행 또는 0열
      map[i][j] = board[i][j];
    } else {
      map[i][j] =
        Math.min(Math.min(map[i][j - 1], map[i - 1][j]), map[i - 1][j - 1]) + 1;
    }
  }

  return Math.pow(answer, 2);
}
