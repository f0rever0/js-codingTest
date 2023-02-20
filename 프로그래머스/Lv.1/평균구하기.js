const solution = (arr) => {
  return arr.reduce((sum, number) => (sum + number, 0)) / arr.length;
};
