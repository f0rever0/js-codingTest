const solution = (elements) => {
  const set = new Set();

  // i : 연속되는 길이
  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      let arr = elements.slice(j, j + i);
      if (i + j > elements.length) {
        arr = [...arr, ...elements.slice(0, i + j - elements.length)];
      }
      const sum = arr.reduce((acc, cur) => acc + cur, 0);
      set.add(sum);
    }
  }
  return set.size;
};
