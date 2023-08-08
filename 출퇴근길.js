// 현대 소프티어 6차

/////////////////////////////////////////////////////////////////////////////////////////////
// 일부 테스트케이스의 마지막에 개행 문자(\n)가 포함되어 있을 수 있습니다.
// 따라서, 예상치 못한 오답 처리를 방지하기 위해서
// fs모듈을 사용하여 입력을 받을 땐, **반드시** trim()을 사용하여 여백을 제거 하거나
// readline 모듈을 통해 입력을 받으시길 바랍니다.
// 해당 내용을 숙지 하셨다면, 주석을 지우고 문제풀이를 하셔도 무방합니다.
/////////////////////////////////////////////////////////////////////////////////////////////
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const [dotNumber, lineNumber] = input.shift().split(" "); // 간선 정보 제거
  const [home, office] = input.pop().split(" "); // 집, 회사 정보 제거

  let obj = {};
  input.forEach((value) => {
    const [start, end] = value.split(" ");
    if (obj[start] === undefined) {
      obj[start] = [end];
    } else {
      obj[Number(start)].push(end);
    }
  });
  console.log(obj);
}
