function solution(fees, records) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  let obj = {};

  records.forEach((record) => {
    let [time, number, type] = record.split(" ");
    // 시간(time)을 분단위로 변환
    time = parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]);
    if (!obj[number]) {
      obj[number] = { total: 0, type: "IN", lastInTime: time, number: number };
    }

    if (type === "IN") {
      obj[number].lastInTime = time;
      obj[number].type = "IN";
    } else {
      // "OUT"
      obj[number].total += time - obj[number].lastInTime; // 총 머문 시간
      obj[number].type = "OUT";
    }
  });

  // 마지막 출차 기록 없는 차량 누적 주차 시간 계산
  Object.values(obj).forEach((car) => {
    if (car.type === "IN") car.total += 1439 - car.lastInTime;
  });

  let result = [];
  // 차량 번호가 작은 자동차 정렬
  Object.values(obj)
    .sort((a, b) => a.number - b.number)
    .forEach((car) => {
      if (car.total <= defaultTime) {
        result.push(defaultTime);
      } else {
        result.push(
          defaultFee + Math.ceil((car.total - defaultTime) / unitTime) * unitFee
        );
      }
    });

  return result;
}
