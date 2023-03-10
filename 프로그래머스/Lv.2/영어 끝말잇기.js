const solution = (n, words) => {
  let usedWord = [words[0]];

  for (let i = 1; i < words.length; i++) {
    if (
      !usedWord.includes(words[i]) &&
      usedWord[usedWord.length - 1].slice(-1) === words[i][0]
    ) {
      usedWord.push(words[i]);
    } else {
      console.log(usedWord);
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
  }

  return [0, 0];
};
