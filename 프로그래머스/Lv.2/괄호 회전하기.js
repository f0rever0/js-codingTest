const solution = (s) => {
  let count = 0;
  const arr = s.split("");

  // 스택으로 짝지어지는지 판단
  const isPaired = (array) => {
    let stack = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] === "}" && stack[stack.length - 1] === "{") {
        stack.pop();
      } else if (array[i] === "]" && stack[stack.length - 1] === "[") {
        stack.pop();
      } else if (array[i] === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(array[i]);
      }
    }
    if (stack.length === 0) count++;
  };

  for (let i = 0; i < s.length; i++) {
    isPaired(arr);
    arr.push(arr.shift());
  }

  return count;
};
