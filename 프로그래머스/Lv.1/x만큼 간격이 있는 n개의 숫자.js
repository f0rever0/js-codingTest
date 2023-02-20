const solution = (x, n) => {
  let result = [];

  if (x > 0) {
    for (let i = x; i <= x * n; i += x) {
      result.push(i);
    }
  } else if (x < 0) {
    for (let i = x; i >= x * n; i += x) {
      result.push(i);
    }
  } else {
    // x가 0일때
    for (let i = 0; i < n; i++) {
      result.push(0);
    }
  }

  // 더 간략하게
  let simpleResult = [];

  for (let i = 1; i <= n; i++) {
    simpleResult.push(x * i);
  }

  return result;
};
