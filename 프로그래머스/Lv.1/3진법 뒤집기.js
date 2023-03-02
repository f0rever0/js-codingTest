const solution = (n) => {
  const reverse3Binary = n.toString(3).split("").reverse().join("");
  return parseInt(reverse3Binary, 3);
};
