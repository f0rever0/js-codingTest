const solution = (arr) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }
  return answer;

  // 더 간결하게 ( filter )
  // return arr.filter((number, index) => number !== arr[index+1]);
};
