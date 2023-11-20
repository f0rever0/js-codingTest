function solution(rows, columns, queries) {
  let answer = [];
  let matrix = Array.from(new Array(rows), () => new Array(columns).fill(0));

  // 숫자 채우기
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = i * columns + (j + 1);
    }
  }

  // console.log(matrix)

  queries.forEach((query) => {
    let arr = [];

    const [x1, y1, x2, y2] = query;

    for (let i = y1 - 1; i < y2 - 1; i++) {
      arr.push(matrix[x1 - 1][i]);
    }
    for (let i = x1 - 1; i < x2 - 1; i++) {
      arr.push(matrix[i][y2 - 1]);
    }
    for (let i = y2 - 1; i > y1 - 1; i--) {
      arr.push(matrix[x2 - 1][i]);
    }
    for (let i = x2 - 1; i > x1 - 1; i--) {
      arr.push(matrix[i][y1 - 1]);
    }

    // 최솟값
    answer.push(Math.min(...arr));
    const temp = arr.pop();
    arr.unshift(temp);

    for (let i = y1 - 1; i < y2 - 1; i++) {
      matrix[x1 - 1][i] = arr.shift();
    }
    for (let i = x1 - 1; i < x2 - 1; i++) {
      matrix[i][y2 - 1] = arr.shift();
    }
    for (let i = y2 - 1; i > y1 - 1; i--) {
      matrix[x2 - 1][i] = arr.shift();
    }
    for (let i = x2 - 1; i > x1 - 1; i--) {
      matrix[i][y1 - 1] = arr.shift();
    }
  });

  return answer;
}
