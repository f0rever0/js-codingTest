function solution(s) {
  // 대문자 정렬
  let upper = s
    .split("")
    .filter((char) => char === char.toUpperCase())
    .sort()
    .reverse();
  // 소문자 정렬
  let lower = s
    .split("")
    .filter((char) => char === char.toLowerCase())
    .sort()
    .reverse();

  return lower.join("") + upper.join("");

  // 더 간결하게
  return s.split("").sort().reverse().join("");
}
