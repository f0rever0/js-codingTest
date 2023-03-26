const solution = (dirs) => {
  let current = [0, 0];
  let route = new Set();

  dirs.split("").forEach((type) => {
    let [x, y] = current;
    switch (type) {
      case "U":
        if (y < 5) y++;
        break;
      case "D":
        if (y > -5) y--;
        break;
      case "R":
        if (x < 5) x++;
        break;
      case "L":
        if (x > -5) x--;
        break;
    }
    if (!(x === current[0] && y === current[1])) {
      route.add("" + current[0] + current[1] + x + y);
      route.add("" + x + y + current[0] + current[1]);
      current = [x, y];
    }
  });

  return route.size / 2;
};
