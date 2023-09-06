function solution(w, h) {
  const getGCD = (number1, number2) => {
    if (number2 === 0) return number1;
    return getGCD(number2, number1 % number2);
  };

  let total = w * h;
  let impossibleBox = w + h - getGCD(w, h);

  return total - impossibleBox;
}

function solution(w, h) {
  const slope = h / w;
  let slopeUP = 0; // 기울기 윗부분까지의 영역

  for (let i = 1; i <= w; i++) {
    // Math.ceil : 올림
    slopeUP += Math.ceil(slope * i);
  }

  let slopeDOWN = h * w - slopeUP; // 전체에서 기울기 윗부분까지의 영역을 제외한 남은 박스들
  return slopeDOWN * 2; // 상하반전으로 2배 필요
}
