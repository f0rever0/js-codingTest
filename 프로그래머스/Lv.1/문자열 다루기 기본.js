const solution = (s) => {
  return s.length === 4 || s.length === 6
    ? s.match(/[a-zA-Z]/g) === null // 알파벳이 포함되어 있는지
      ? true
      : false
    : false;

  // 더 간결하게 ( test 사용 )
  // return s.length === 4 || s.length === 6 ? !/[a-zA-Z]/g.test(s) : false;
};
