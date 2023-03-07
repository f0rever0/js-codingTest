const solution = (survey, choices) => {
  let type = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];
  // 성격 유형 점수 표
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] <= 3) {
      // 1,2,3 비동의
      type.forEach(
        (element) =>
          element[survey[i].split("")[0]] !== undefined &&
          (element[survey[i].split("")[0]] += Math.abs(choices[i] - 4))
      );
    } else if (choices[i] >= 5) {
      // 5,6,7 동의
      type.forEach(
        (element) =>
          element[survey[i].split("")[1]] !== undefined &&
          (element[survey[i].split("")[1]] += choices[i] - 4)
      );
    }
  }

  // 성격 유형 추출
  let result = "";
  type.forEach((element) =>
    Object.values(element)[0] >= Object.values(element)[1]
      ? (result += Object.keys(element)[0])
      : (result += Object.keys(element)[1])
  );
  return result;
};
