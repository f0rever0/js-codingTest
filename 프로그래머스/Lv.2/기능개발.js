const solution = (progresses, speeds) => {
  // 각 기능 개발 완료까지 걸리는 시간
  let time = [];
  progresses.forEach((pro, index) =>
    time.push(Math.ceil((100 - pro) / speeds[index]))
  );

  let result = [];
  for (let i = 0; i < time.length; i++) {
    let j = i;
    let count = 1; // 각 배포마다 몇 개의 기능이 배포되는지
    while (time[i] >= time[j + 1]) {
      j++;
      count++;
    }
    result.push(count);
    i = j;
  }
  return result;
};
