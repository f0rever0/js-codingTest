const solution = (s) => {
  // 이진 변환의 횟수
  let count = 0;
  // 제거된 모든 0의 개수
  let delete0 = 0;

  while (s !== "1") {
    count++;
    delete0 += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }

  return [count, delete0];
};
