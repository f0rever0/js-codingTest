const solution = (want, number, discount) => {
  let answer = 0;

  const isMatch = (array) => {
    let saleObj = {};
    array.forEach((item) => {
      saleObj[item] ? saleObj[item]++ : (saleObj[item] = 1);
    });

    for (let i = 0; i < want.length; i++) {
      if (number[i] > saleObj[want[i]] || saleObj[want[i]] === undefined)
        return false;
    }
    return true;
  };

  for (let i = 0; i <= discount.length - 10; i++) {
    const arr = discount.slice(i, i + 10);
    if (isMatch(arr)) answer++;
  }
  return answer;
};
