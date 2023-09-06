function solution(s) {
  let result = []; // 최대 길이 : s.length
  if (s.length === 1) return 1;
  for (let i = 1; i < s.length; i++) {
    let array = [];
    let temp = s.slice(0, 0 + i);
    let count = 1;
    for (let j = i; j < s.length; j += i) {
      let str = s.slice(j, j + i); // 잘라낸 문자열
      if (temp !== str) {
        if (count >= 2) array.push(count);
        array.push(temp);
        // 초기화
        temp = str;
        count = 1;
      } else {
        count++;
      }
    }
    if (count >= 2) array.push(count);
    array.push(temp);

    result.push(array.join("").length);
  }
  return Math.min(...result);
}
