const solution = (new_id) => {
  const recommend_id = new_id
    .toLowerCase() // 1, 소문자로 변경
    .replace(/[^\w-_.]/g, "") // 2,  알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자빼고 다 제거
    .replace(/\.+/g, ".") // 3 , .이 한개 이상 쓰인건 . 하나로 바꿈
    .replace(/^\.|\.$/g, "") // 4, .으로 시작하거나 끝나면 .제거
    .replace(/^$/, "a") // 5, 빈 문자열이면 a로 채움
    .slice(0, 15) // 6, 15자까지만 자르기
    .replace(/\.$/, ""); // 6, 15자리까지 잘랐는데 .으로 끝나면 .제거

  return recommend_id.length > 2
    ? recommend_id
    : recommend_id +
        recommend_id
          .charAt(recommend_id.length - 1)
          .repeat(3 - recommend_id.length);
};
