const solution = (s) => {
  let answer = [];

  for (let i = 0; i < s.split("").length; i++) {
    let index = s.substr(0, i).lastIndexOf(s.substr(i, 1));
    if (index === -1) {
      answer.push(index);
    } else {
      answer.push(i - index);
    }
  }
  return answer;
};
