const solution = (price, money, count) => {
  let sum = 0;
  while (count !== 0) {
    sum += price * count;
    count--;
  }
  return money >= sum ? 0 : Math.abs(money - sum);
};
