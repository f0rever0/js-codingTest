const solution = (numbers) => {
  const cal = (x) => {
    if (x % 2 === 0) {
      return ++x;
    } else {
      const binary = "0" + x.toString(2);
      const index = binary.lastIndexOf("0");
      return parseInt(
        parseInt(
          binary.substring(0, index) +
            "10" +
            binary.substring(index + 2, binary.length),
          2
        )
      );
    }
  };

  let answer = [];
  numbers.forEach((number) => answer.push(cal(number)));
  return answer;
};

// ! 시간 초과
// const solution = (numbers) => {
//   const cal = (x) => {
//     const xBit = x.toString(2).split(""); // 입력 비트(기준 비트)
//     while (true) {
//       x++;
//       const yBit = x.toString(2).split(""); // 입력 수보다 큰 수의 비트

//       let difference = 0; // 다른 비트의 개수
//       if (xBit.length != yBit.length) xBit.unshift("0");

//       xBit.forEach((x, index) => {
//         if (x !== yBit[index]) difference++;
//       });

//       if (difference <= 2) {
//         console.log("f");
//         return x;
//         break;
//       }
//     }
//   };

//   let answer = [];
//   numbers.forEach((number) => answer.push(cal(number)));
//   return answer;
// };
