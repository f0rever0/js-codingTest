const solution = (p) => {
  if (p === "") return "";

  // 올바른 괄호 문자열인지 체크
  const check = (string) => {
    let stack = [];
    string.split("").forEach((item) => {
      item === "(" ? stack.push(item) : stack.pop();
    });
    return stack.length === 0 ? true : false;
  };

  let isSymmetry = 0; // ( : +1, ) : -1
  let u = "";
  let v = "";

  for (let i = 0; i < p.length; i++) {
    p[i] === "(" ? isSymmetry++ : isSymmetry--;

    if (isSymmetry === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1, p.length);

      if (check(u)) {
        return u + solution(v);
      }
      return `(${solution(v)})${[...u.slice(1, -1)]
        .map((x) => (x === "(" ? ")" : "("))
        .join("")}`;
    }
  }
};
