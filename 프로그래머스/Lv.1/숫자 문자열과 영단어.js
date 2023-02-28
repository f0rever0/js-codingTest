const solution = (s) => {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numbers.length; i++) {
    let regex = new RegExp(`${numbers[i]}`, "g");
    s = s.replace(regex, i);
  }

  return Number(s);
};
