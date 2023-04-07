const solution = (topping) => {
  const map = new Map();
  const bro = new Set();
  let count = 0; // 롤케이크를 나누는 방법

  topping.forEach((item) => {
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
  });

  for (let i = 0; i < topping.length; i++) {
    let toppingCount = map.get(topping[i]) - 1;
    bro.add(topping[i]);

    toppingCount === 0
      ? map.delete(topping[i])
      : map.set(topping[i], toppingCount);

    if (map.size === bro.size) count++;
  }

  return count;
};

// ! 시간 초과
// const solution = (topping) => {
//   let count = 0;
//   for (let i = 1; i < topping.length - 2; i++) {
//     let person1 = topping.slice(0, i);
//     let person2 = topping.slice(i, topping.length);

//     let set1 = new Set(person1);
//     let set2 = new Set(person2);

//     if (set1.size === set2.size) count++;
//   }

//   return count;
// };
