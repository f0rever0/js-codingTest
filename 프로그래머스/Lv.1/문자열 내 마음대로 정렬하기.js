function solution(strings, n) {
  strings.sort();
  let charArray = strings.map((a) => a.charAt(n));
  charArray.sort();

  let result = [];
  for (let i = 0; i < charArray.length; i++) {
    for (let j = 0; j < strings.length; j++) {
      if (charArray[i] === strings[j].charAt(n)) {
        result.push(strings[j]);
        strings.splice(j, 1);
        break;
      }
    }
  }
  return result;
}
