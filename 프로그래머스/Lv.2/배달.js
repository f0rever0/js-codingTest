const solution = (N, road, K) => {
  const totalTime = Array(N + 1).fill(500000);
  const lines = Array.from(Array(N + 1), () => []);

  road.forEach((item) => {
    const [start, to, time] = item;
    lines[start].push({ to: to, time: time });
    lines[to].push({ to: start, time: time });
  });

  let queue = [{ to: 1, time: 0 }];
  totalTime[queue[0].to] = queue[0].time;

  while (queue.length !== 0) {
    let start = queue.pop().to;

    lines[start].forEach((next) => {
      // start에서 시작해서 갈 수 있는 to로 까지의 time
      let currentTotalTime = totalTime[next.to];
      let newTotalTime = totalTime[start] + next.time;
      if (currentTotalTime > newTotalTime) {
        totalTime[next.to] = newTotalTime;
        queue.push(next);
      }
    });
  }

  return totalTime.filter((item) => item <= K).length;
};
