const solution = (clothes) => {
  const obj = {};

  for (let i = 0; i < clothes.length; i++) {
    const [name, type] = clothes[i];
    if (obj[type]) {
      obj[type]++;
    } else {
      obj[type] = 1;
    }
  }

  let answer = 1;

  for (var key in obj) {
    answer *= obj[key] + 1;
  }

  return answer - 1;
};
