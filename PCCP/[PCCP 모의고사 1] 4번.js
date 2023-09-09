// ! 실패
function solution(program) {
  let currentTime = 0;
  let 대기시간 = new Array(program.length).fill(0);

  let programList = program;
  programList.forEach((info, index) => {
    // [index, 우선순위, 호출시각, 실행시간]
    info.unshift(index);
  });

  let callList = programList;
  callList.sort((a, b) => {
    // 호출시각 기준으로 정렬
    if (a[2] < b[2]) return -1;
    if (a[2] > b[2]) return 1;
  });

  let priorityList = programList;
  priorityList.sort((a, b) => {
    // 우선순위 기준으로 정렬
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
  });

  console.log(callList);
  console.log(priorityList);

  programList.forEach((pro) => {
    let [index, priority, call, run] = pro;
    대기시간[index] = currentTime - call;
    currentTime += run;
  });

  // console.log(programList)
  // console.log(대기시간)

  // 우선순위별 대기시간 합
  let array = new Array(10).fill(0);

  대기시간.forEach((time, index) => {
    let priority = programList[index][1];
    array[priority - 1] += time;
  });

  return [currentTime, ...array];
}
