// 투 포인터(다중 포인터)
const solution = (queue1, queue2) => {
  let q1Sum = queue1.reduce((acc, cur) => acc + cur, 0);
  const sum = queue1.reduce((acc, cur, index) => acc + cur + queue2[index], 0);
  const queue = [...queue1, ...queue2];
  let q1Pointer = 0;
  let q2Pointer = queue1.length;

  if (q1Sum === sum / 2) return 0;

  for (let count = 0; count < queue1.length * 3; count++) {
    if (q1Sum === sum / 2) {
      return count;
    }
    if (q1Sum > sum / 2) {
      q1Sum -= queue[q1Pointer++];
    } else {
      q1Sum += queue[q2Pointer++];
    }
  }

  return -1;
};
