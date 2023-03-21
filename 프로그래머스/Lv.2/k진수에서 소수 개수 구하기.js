function solution(n, k) {
  // 변환된 수
  let num = n.toString(k);

  // 조건에 맞는 소수(10진법으로 보았을 때 소수) 갯수
  let answer = 0;

  const isPrimeNumber = (number) => {
    if (number <= 1) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  num.split("0").forEach((number) => {
    if (isPrimeNumber(Number(number))) answer++;
  });

  return answer;
}
