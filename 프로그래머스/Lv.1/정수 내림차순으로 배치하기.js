const solution = (n) => {
  return parseInt(
    n
      .toString()
      .split("")
      .map((s) => parseInt(s))
      .sort((a, b) => b - a)
      .join("")
  );
};
