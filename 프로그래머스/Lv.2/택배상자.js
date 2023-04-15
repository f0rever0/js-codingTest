const solution = (order) => {
  let container = order; // 메인 컨테이너
  let stack = []; // 보조 컨테이너
  let index = 0;

  for (let i = 1; i <= container.length; i++) {
    if (container[index] != i) {
      stack.push(i);
    } else {
      index++;
    }

    while (stack.length > 0 && stack[stack.length - 1] === order[index]) {
      stack.pop();
      index++;
    }
  }

  return index;
};
