const solution = (book_time) => {
  // 시작 시간을 기준으로 오름차순 정렬
  book_time.sort();
  let room = [];

  function changeToTime(value) {
    return Number(value.split(":")[0]) * 60 + Number(value.split(":")[1]);
  }

  book_time.forEach((time) => {
    let startTime = changeToTime(time[0]);
    // +10 : 청소시간
    let endTime = changeToTime(time[1]) + 10;

    const roomIndex = room.findIndex((r) => r <= startTime);
    if (roomIndex === -1) {
      room.push(endTime);
    } else {
      room[roomIndex] = endTime;
    }
  });

  return room.length;
};
