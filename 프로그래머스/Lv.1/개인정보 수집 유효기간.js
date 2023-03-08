const solution = (today, terms, privacies) => {
  // 현재 날짜 [yyyy, mm, dd]
  const current = today.split(".").map((e) => parseInt(e));
  let result = [];

  // terms에서 약관 종류와 유효 기간 분리
  let termObject = new Object();

  terms.forEach((element) => {
    const [type, period] = element.split(" ");
    termObject[type] = [parseInt(period)];
  });

  privacies.forEach((element, index) => {
    const [date, type] = element.split(" ");
    let [year, month, day] = date.split(".").map((e) => parseInt(e));

    // month에 약관 종류에 맞는 유효 기간을 더하기
    if (month + parseInt(termObject[type]) > 12) {
      year = year + parseInt((month + parseInt(termObject[type])) / 12);
      if ((month + parseInt(termObject[type])) % 12 === 0) {
        // 더한 값이 12의 배수일 경우
        year--;
        month = 12;
      } else {
        month = (month + parseInt(termObject[type])) % 12;
      }
    } else {
      month += parseInt(termObject[type]);
    }

    // 보관 가능 날짜는 유효기간 하루 전날까지라서 하루를 빼줌
    if (day - 1 === 0) {
      day = 28;
      if (month - 1 === 0) {
        year--;
        month = 12;
      } else {
        month--;
      }
    } else {
      day--;
    }

    // 유효 기간 지났는지 확인
    if (year < current[0]) {
      result.push(index + 1);
    } else if (year === current[0]) {
      if (month < current[1]) {
        result.push(index + 1);
      } else if (month === current[1]) {
        if (day < current[2]) {
          result.push(index + 1);
        }
      }
    }
  });

  return result;
};
