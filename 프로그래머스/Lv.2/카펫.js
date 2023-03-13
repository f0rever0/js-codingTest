const solution = (brown, yellow) => {
  const total = brown + yellow;

  for (let i = 1; i <= total; i++) {
    if (total % i === 0 && i >= total / i) {
      const [width, height] = [i, total / i];
      if ((width - 2) * (height - 2) === yellow) return [width, height];
    }
  }
};
