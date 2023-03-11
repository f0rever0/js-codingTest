const solution = (people, limit) => {
  people.sort((a, b) => b - a);
  let count = 0;

  // ! 시간 초과
  // while (people.length > 0) {
  //   if (limit >= people[index] + people[people.length - 1]) people.pop();
  //   people.shift();
  //   count++;
  // }

  for (let i = 0; i < people.length; i++) {
    if (limit >= people[i] + people[people.length - 1]) people.pop();
    count++;
  }

  return count;
};
