const solution = (s) => {
  let arr = [];
  s.slice(2, -2)
    .split("},{")
    .forEach((item) => arr.push(item));

  arr.sort((a, b) => a.length - b.length);

  let result = [];
  arr.forEach((item) =>
    item.split(",").forEach((number) => {
      if (!result.includes(number)) result.push(number);
    })
  );
  return result.map((str) => parseInt(str));
};
