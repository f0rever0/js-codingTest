const solution = (record) => {
  let db = {};
  let answer = [];

  record.forEach((i) => {
    const [type, userId, userNickname] = i.split(" ");
    if (userNickname) {
      // [유저 아이디] 사용자가 채팅방에서 퇴장 - "Leave [유저 아이디]" 인 경우는 userNickname === undefined 이기에 체크
      db[userId] = userNickname;
    }
  });

  for (let i = 0; i < record.length; i++) {
    const [type, userId, userNickname] = record[i].split(" ");
    switch (type) {
      case "Enter":
        answer.push(`${db[userId]}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${db[userId]}님이 나갔습니다.`);
        break;
    }
  }

  return answer;
};
