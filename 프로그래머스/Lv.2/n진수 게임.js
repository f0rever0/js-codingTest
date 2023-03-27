const solution = (n, t, m, p) => {
  let string = "";
  let num = 0;

  while (string.length < t * m) {
    string += num.toString(n).toUpperCase();
    num++;
  }

  let answer = "";
  for (let i = p - 1; i < t * m; i += m) {
    answer += string.charAt(i);
  }

  return answer;
};
