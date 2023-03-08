const solution = (id_list, report, k) => {
  // key : 신고 당한 id, value : 해당 key를 신고한 id
  let declarationObject = new Object();
  id_list.forEach((id) => (declarationObject[id] = []));

  // ! 시간 초과 코드
  // for (let i = 0; i < id_list.length; i++) {
  //   for (let j = 0; j < report.length; j++) {
  //     if (report[j].split(" ")[1] === id_list[i]) {
  //       if (!declarationObject[id_list[i]].includes(report[j].split(" ")[0])) {
  //         declarationObject[id_list[i]].push(report[j].split(" ")[0]);
  //       }
  //     }
  //   }
  // }

  report.forEach((user) => {
    const [user_id, report_id] = user.split(" ");
    if (!declarationObject[report_id].includes(user_id)) {
      declarationObject[report_id].push(user_id);
    }
  });

  let result = new Array(id_list.length).fill(0);

  for (const key in declarationObject) {
    if (declarationObject[key].length >= k) {
      // 신고 당한 횟수가 k보다 크면 이용정지 유저 id가 됨
      declarationObject[key].forEach((user) => {
        result[id_list.indexOf(user)] += 1; // 이용 정지된 유저를 신고한 id에 +1
      });
    }
  }
  return result;
};
