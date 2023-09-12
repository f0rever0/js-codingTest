// ! 실패
function solution(sales, links) {
  // (직원번호, 해당 직원의 하루 매출액)
  // 직원번호 = 1, 화살표 시작 : CEO, 팀장
  // 화살표 받기 & 시작 : 팀장 & 팀원
  // 화살표 받기 : 팀원
  // 모든 팀 1명이상 참석, 워크숍 참가하는 직원들의 하루 평균 매출액 총합 최소
  let obj = {};
  links.forEach((link) => {
    let [boss, staff] = link;
    if (obj[boss]) {
      obj[boss].push(staff);
    } else {
      obj[boss] = [boss, staff];
    }
  });

  // 팀별 리스트, 각 팀의 0번 인덱스는 팀장 나머지는 팀원
  let teams = Object.values(obj);
  let total = sales.reduce((acc, cur) => acc + cur, 0);
  let result = 0;
  // console.log(teams)

  // 각 팀별 최소 작업량 팀원 or 2팀에 엮여있는 팀원
  let minCrew = [];
  teams.forEach((team) => {
    let min = total;
    let minIndex = 0;
    let duplicationList = team.filter((number) => minCrew.includes(number));
    if (duplicationList.length === 1) {
      console.log("중복");
      // min = sales[duplicationList[0]-1]
      // minIndex = duplicationList[0]
    } else {
      team.forEach((crew) => {
        if (min >= sales[crew - 1]) {
          min = sales[crew - 1];
          minIndex = crew;
        }
      });
    }

    minCrew.push(minIndex);
    if (minIndex > 0) {
      result += min;
    }
    // console.log(minCrew)
    // console.log("team min", min)
  });

  return result;
}
