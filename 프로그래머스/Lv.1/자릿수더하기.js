const solution = (n) => {
  let numberList = n.toString().split("");
  numberList = numberList.map((s) => parseInt(s));

  return numberList.reduce((sum, number) => (sum + number, 0));
};
