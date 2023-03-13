const solution = (n, a, b) => {
  let aPerson = a;
  let bPerson = b;
  let count = 0;

  while (aPerson !== bPerson) {
    aPerson = Math.ceil(aPerson / 2);
    bPerson = Math.ceil(bPerson / 2);
    count++;
  }

  return count;
};
