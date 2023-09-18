function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  let visited = [];
  let answer = 0;
  let queue = [[begin, answer]];

  while (queue.length !== 0) {
    let [currnetWord, count] = queue.shift();

    if (currnetWord === target) return count;

    words.forEach((word) => {
      let equalCount = 0;
      if (!visited.includes(word)) {
        for (let i = 0; i < word.length; i++) {
          if (word[i] === currnetWord[i]) equalCount++;
        }

        if (equalCount === word.length - 1) {
          queue.push([word, count + 1]);
          visited.push(word);
        }
      }
    });
  }

  return answer;
}
