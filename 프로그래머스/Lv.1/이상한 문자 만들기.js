const solutio = (s) => {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((w, index) =>
          index % 2 === 0 ? w.toUpperCase() : w.toLowerCase()
        )
        .join("")
    )
    .join(" ");
};
