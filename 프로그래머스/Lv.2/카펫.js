const solution2 = (brown, yellow) => {
  let total = brown + yellow;
  // yellow = 6 * 4
  // total = 8 * 6

  for (let x = 1; x <= brown; x++) {
    for (let y = 1; y <= x; y++) {
      if (total === x * y && yellow === (x - 2) * (y - 2)) {
        return [x, y];
      }
    }
  }
};

const solution = (brown, yellow) => {
  const total = brown + yellow;

  for (let i = 1; i <= total; i++) {
    if (total % i === 0 && i >= total / i) {
      const [width, height] = [i, total / i];
      if ((width - 2) * (height - 2) === yellow) return [width, height];
    }
  }
};
