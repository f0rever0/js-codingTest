const solution = (N, stages) => {
  const totalUser = stages.length;

  // 스테이지 별 도달한 사람의 수
  let reachArray = new Array(N + 1).fill(0);
  stages.forEach((number) => reachArray[number - 1]++);

  // 스테이지별 실패율
  let failArray = [];
  let sum = 0; // 해당 스테이지까지 누적 유저 수
  for (let i = 0; i < reachArray.length - 1; i++) {
    failArray.push({ index: i, failRate: reachArray[i] / (totalUser - sum) });
    sum += reachArray[i];
  }

  failArray.sort((a, b) => {
    if (a.failRate > b.failRate) return -1;
    if (a.failRate < b.failRate) return 1;
    return a.stage - b.stage; // 실패율이 같은 스테이지는 오름차순
  });

  return failArray.map((element) => element.index + 1);
};
