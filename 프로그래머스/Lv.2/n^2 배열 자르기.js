const solution = (n, left, right) => {
  let arr = [];

  for (let i = left; i <= right; i++) {
    arr.push(Math.max(parseInt(i / n), i % n) + 1);
  }

  return arr;
};

// !런타임 에러
// const solution = (n, left, right) => {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       arr.push(i);
//     }
//     for (let j = i + 1; j <= n; j++) {
//       arr.push(j);
//     }
//   }
//   return arr.slice(left, right + 1);
// }
