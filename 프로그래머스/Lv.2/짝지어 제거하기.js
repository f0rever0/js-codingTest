const solution = (s) => {
  const stack = [s.charAt(0)];

  for (let i = 1; i < s.length; i++) {
    stack[i - 1] === s.charAt(i) || stack[stack.length - 1] === s.charAt(i)
      ? stack.pop()
      : stack.push(s.charAt(i));
  }

  return stack.length ? 0 : 1;
};
