const solution = (s) => {
  let pCount = 0;
  let yCount = 0;

  s.split("").filter((char) => char.toLowerCase() === "y" && yCount++);
  s.split("").filter((char) => char.toLowerCase() === "p" && pCount++);
  return pCount === yCount ? true : false;
};
