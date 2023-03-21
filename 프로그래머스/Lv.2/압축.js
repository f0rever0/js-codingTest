const solution = (msg) => {
  const words = [];

  for (let i = 0; i <= 25; i++) {
    words.push(String.fromCharCode(i + 65));
  }

  let answer = [];
  let i = 0;

  while (i !== msg.length) {
    let j = 1;

    while (words.includes(msg.substring(i, i + j)) && i + j <= msg.length) {
      j++;
    }

    words.push(msg.substring(i, i + j));
    answer.push(words.indexOf(msg.substring(i, i + j - 1)) + 1);
    i = i + j - 1;
  }
  return answer;
};
