const solution = (numbers) => {
  let answer = new Array(numbers.length).fill(-1);
  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    while (stack && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
};

// ! 시간 초과
// const solution = (numbers) => {
//   let answer = new Array(numbers.length).fill(-1);
//   for(let i = 0; i < numbers.length; i++){
//       for(let j = i+1; j < numbers.length; j++ ){
//           if(numbers[i] < numbers[j]){
//               answer[i] = numbers[j];
//               break;
//           }
//       }
//   }
//   return answer;
// }
