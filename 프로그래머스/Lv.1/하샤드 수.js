const solution = (x) => {
  const list = x
    .toString()
    .split("")
    .map((x) => parseInt(x));
  const sum = list.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  return x % sum === 0;
};
