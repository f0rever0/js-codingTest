const solution = (n) => {
  let result = "";
  const modList = [4, 2, 1];
  while (n) {
    result = modList[n % 3] + result;
    n = parseInt((n - 1) / 3);
  }

  return result;
};
