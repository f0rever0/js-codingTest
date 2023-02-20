const solution = (arr) => {
  return arr.reduce((sum, number) => (sum += number)) / arr.length;
};
