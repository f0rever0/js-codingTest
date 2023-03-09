const solution = (s) => {
  return s
    .toLowerCase()
    .split(" ")
    .map((element) => element.charAt(0).toUpperCase() + element.substring(1))
    .join(" ");
};
