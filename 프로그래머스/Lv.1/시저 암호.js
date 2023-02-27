const solution = (s, n) => {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    let sASCII = s.charCodeAt(i);
    if (sASCII >= 65 && sASCII <= 90) {
      sASCII + n > 90 ? (sASCII = sASCII + n - 26) : (sASCII += n);
    } else if (sASCII >= 97 && sASCII <= 122) {
      sASCII + n > 122 ? (sASCII = sASCII + n - 26) : (sASCII += n);
    }
    answer += String.fromCharCode(sASCII);
  }
  return answer;
};
