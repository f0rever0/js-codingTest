const solution = (arr, divisor) => {
  let list = arr
    .filter((number) => number % divisor === 0)
    .sort((a, b) => a - b);
  return list.length === 0 ? [-1] : list;
};
