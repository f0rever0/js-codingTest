const solution = (n) => {
  let answer = [];

  let x = -1;
  let y = 0;
  let number = 1;

  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Array(i).fill(0));
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // 밑으로
      if (i % 3 === 0) {
        x += 1;
        // 오른쪽으로
      } else if (i % 3 === 1) {
        y += 1;
        //위로
      } else {
        // i % 3 === 2
        x -= 1;
        y -= 1;
      }
      arr[x][y] = number;
      number++;
    }
  }

  for (let i = 0; i < n; i++) {
    answer = [...answer, ...arr[i]];
  }

  return answer;
};
