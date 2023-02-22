const solution = (absolutes, signs) => {
  let sum = 0;

  absolutes.forEach((number, index) =>
    signs[index] ? (sum += number) : (sum -= number)
  );
  return sum;
};
