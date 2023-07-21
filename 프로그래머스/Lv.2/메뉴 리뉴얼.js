const solution = (orders, course) => {
  let answer = [];
  let obj = [];
  course.forEach((number) => {
    orders.forEach((order) => {
      getCombinations([...order], number).map((word) => {
        obj[word] ? (obj[word] += 1) : (obj[word] = 1);
      });
    });
    let max = Math.max(...Object.values(obj));
    for (let key in obj) {
      if (obj[key] === max && obj[key] >= 2) answer.push(key);
    }
    obj = [];
  });

  return answer.sort();
};

const getCombinations = function (array, number) {
  let results = [];
  if (number === 1) return array;

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, number - 1);
    const attached = combinations.map((el) => [fixed, ...el].sort().join(""));
    results.push(...attached);
  });

  return results;
};
