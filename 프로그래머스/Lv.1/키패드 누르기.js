const solution = (numbers, hand) => {
  let result = "";
  let currentL = "*"; // 왼손 위치
  let currentR = "#"; // 오른손 위치

  // 현재 손에서 위치(currentLocation)와 입력할 번호(nextButtonNumber)의 거리 구하기
  const calculateDistance = (nextButtonNumber, currentLocation) => {
    const row = Math.abs(
      findKey(nextButtonNumber)[0] - findKey(currentLocation)[0]
    );
    const column = Math.abs(
      findKey(nextButtonNumber)[1] - findKey(currentLocation)[1]
    );

    return row + column;
  };

  // 키패드 좌표값 찾기
  const findKey = (number) => {
    const keypad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ["*", 0, "#"],
    ];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (keypad[i][j] === number) {
          return [i, j];
        }
      }
    }
  };

  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] === 1) | (numbers[i] === 4) | (numbers[i] === 7)) {
      result += "L";
      currentL = numbers[i];
    } else if ((numbers[i] === 3) | (numbers[i] === 6) | (numbers[i] === 9)) {
      result += "R";
      currentR = numbers[i];
    } else {
      if (
        calculateDistance(numbers[i], currentL) >
        calculateDistance(numbers[i], currentR)
      ) {
        result += "R";
        currentR = numbers[i];
      } else if (
        calculateDistance(numbers[i], currentL) ===
        calculateDistance(numbers[i], currentR)
      ) {
        hand === "left"
          ? ((result += "L"), (currentL = numbers[i]))
          : ((result += "R"), (currentR = numbers[i]));
      } else {
        result += "L";
        currentL = numbers[i];
      }
    }
  }

  return result;
};
