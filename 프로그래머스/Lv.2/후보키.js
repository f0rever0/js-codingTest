function solution(relation) {
  // 컬럼 개수
  let columNumber = relation[0].length;
  let indexArray = []; // 컬럼 인덱스 리스트
  let combinations = [];
  for (let i = 0; i < columNumber; i++) {
    indexArray.push(i);
  }

  for (let i = 1; i <= indexArray.length; i++) {
    combinations.push(...getCombinations(indexArray, i));
  }

  let result = [];

  combinations.forEach((combination) => {
    let set = new Set();
    relation.forEach((col) => {
      set.add(combination.map((value) => col[value]).join("/"));
    });

    if (set.size === relation.length) {
      // 중복이 없을때(유일성)
      // 최소성
      let isNotMinimal = result.some((list) =>
        list.every((value) => combination.includes(value))
      );
      if (!isNotMinimal) result.push(combination);
    }
  });

  combinations = result;

  return combinations.length;
}

// 조합
function getCombinations(array, selectNumber) {
  const results = [];
  if (selectNumber === 1) return array.map((el) => [el]);

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}
