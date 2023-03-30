const solution = (numbers) => {
  let numberList = numbers.split("");
  let numberSet = new Set();

  // 소수 판별 함수
  const isPrimeNumber = (number) => {
    if (number <= 1) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  // numberList로 만들수 있는 모든 숫자의 경우의 수
  const dfs = (list, fixed) => {
    if (list.length >= 1) {
      for (let i = 0; i < list.length; i++) {
        let str = fixed + list[i]; // 만든 문자열
        let leftList = [...list]; // 고정된 문자열을 제거한 남은 배열
        leftList.splice(i, 1);

        // 만든 숫자가 소수이면 numberSet에 추가
        if (isPrimeNumber(parseInt(str))) numberSet.add(parseInt(str));

        dfs(leftList, str);
      }
    }
  };

  dfs(numberList, "");

  return numberSet.size;
};
