const solution = (numbers) => {
  numbers = numbers
    .map((item) => item + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  return numbers[0] === "0" ? "0" : numbers;
};
