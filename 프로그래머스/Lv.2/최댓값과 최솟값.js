const solution = (s) => {
  // 배열을 오른차순으로 정렬
  const numberList = s.split(" ").sort((a, b) => a - b);
  return `${numberList[0]} ${numberList[numberList.length - 1]}`;
};
