const solution = (n) => {
  let count = 0;

  while (n !== 0) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n--;
      count++;
    }
  }
  return count;
};
