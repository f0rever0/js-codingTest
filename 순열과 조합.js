// https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

// 순열
function getPermutations(array, selectNumber) {
  const results = [];
  if (selectNumber === 1) return array.map((el) => [el]);
  // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNumber - 1);
    // 나머지에 대해서 순열을 구한다.
    const attached = permutations.map((el) => [fixed, ...el]);
    //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}

console.log("순열", getPermutations([1, 2, 3, 4], 3));
/* 순열 [
  [ 1, 2, 3 ], [ 1, 2, 4 ],
  [ 1, 3, 2 ], [ 1, 3, 4 ],
  [ 1, 4, 2 ], [ 1, 4, 3 ],
  [ 2, 1, 3 ], [ 2, 1, 4 ],
  [ 2, 3, 1 ], [ 2, 3, 4 ],
  [ 2, 4, 1 ], [ 2, 4, 3 ],
  [ 3, 1, 2 ], [ 3, 1, 4 ],
  [ 3, 2, 1 ], [ 3, 2, 4 ],
  [ 3, 4, 1 ], [ 3, 4, 2 ],
  [ 4, 1, 2 ], [ 4, 1, 3 ],
  [ 4, 2, 1 ], [ 4, 2, 3 ],
  [ 4, 3, 1 ], [ 4, 3, 2 ]
]
*/

// 조합
function getCombinations(array, selectNumber) {
  const results = [];
  if (selectNumber === 1) return array.map((el) => [el]);
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1);
    // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((el) => [fixed, ...el]);
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}

console.log("조합", getCombinations([1, 2, 3, 4], 3));
// 조합 [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]

// 현대 코테 조합
function solution(mmr) {
  let list = [];
  let temp = [];
  for (let k = 0; k < mmr.length / 2; k++) {
    temp.push(k);
  }
  list.push(temp);

  const total = mmr.reduce((acc, cur) => acc + cur, 0);
  for (let j = 0; j < mmr.length / 2; j++) {
    for (let i = mmr.length / 2; i < mmr.length; i++) {
      let deepCopy = [...list[0]];
      deepCopy[j] = i;
      list.push(deepCopy);
    }
  }

  let min = total;

  list.forEach((item) => {
    let sum = 0;
    item.forEach((index) => {
      sum += mmr[index];
    });
    let rest = total - sum;
    if (min > Math.abs(sum - rest)) min = Math.abs(sum - rest);
  });
  return min;
}
