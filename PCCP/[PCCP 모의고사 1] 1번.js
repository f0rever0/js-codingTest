function solution(input_string) {
  const inputStringList = input_string.split("");
  // 외톨이 알파벳 리스트
  let obj = {};

  let stack = [...inputStringList[0]];

  for (let i = 1; i < inputStringList.length; i++) {
    let temp = stack[stack.length - 1];
    let char = inputStringList[i];
    if (temp !== char) {
      stack.push(char);
    }
  }

  stack.forEach((char) => {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  });

  let a = Object.keys(obj).filter((key) => obj[key] >= 2 && key !== "*");
  if (a.length === 0) return "N";
  return a.sort().join("");
}
