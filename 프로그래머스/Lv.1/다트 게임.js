function solution(dartResult) {
  let scores = [];
  let stageDart = 0; // 사용자가 스테이지에서 다트로 맞춘 점수
  let stageScore = 0; // S,D,T 옵션을 포함한 스테이지 점수

  const calculateOption = (element) => {
    switch (element) {
      case "*": // 스타상
        scores[scores.length - 1] *= 2; // 이전 스테이지 값 2배
        scores.push(stageScore * 2); // 현재 스테이지 값 2배
        break;
      case "#": // 아차상
        scores.push(stageScore * -1);
        break;
      default: // 기본옵션
        scores.push(stageScore);
        break;
    }
  };

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      stageDart = 0; // 스테이지 다트 값 초기화
      dartResult[i + 1] === "0"
        ? ((stageDart = 10), i++)
        : (stageDart = parseInt(dartResult[i]));
    } else if (dartResult[i] === "S") {
      stageScore = Math.pow(stageDart, 1);
      calculateOption(dartResult[i + 1]);
    } else if (dartResult[i] === "D") {
      stageScore = Math.pow(stageDart, 2);
      calculateOption(dartResult[i + 1]);
    } else if (dartResult[i] === "T") {
      stageScore = Math.pow(stageDart, 3);
      calculateOption(dartResult[i + 1]);
    }
    console.log(scores);
  }

  return scores.reduce((acc, cur) => (acc += cur), 0);
}
