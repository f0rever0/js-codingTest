const solution = (n) => {
  let n1Length = n.toString(2).match(/1/g).length;
  while (true) {
    n++;
    if (n.toString(2).match(/1/g).length === n1Length) return n;
  }
};
