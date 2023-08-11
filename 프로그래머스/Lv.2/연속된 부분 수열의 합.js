function solution(sequence, k) {
  let [l, r] = [0, 0];
  let sum = sequence[l];
  let answer = [];
  let min = 100000000000;
  while (r < sequence.length) {
    if (sum < k) sum += sequence[++r];
    else if (sum > k) sum -= sequence[l++];
    else {
      if (min > r - l) {
        answer = [];
        answer.push(l, r);
        min = r - l;
      }
      sum += sequence[++r];
      sum -= sequence[l++];
    }
  }
  return answer;
}

// ! 시간 초과
/*
function solution(sequence, k) {
  let answer = [];
  let lengthList = [];
  for (let i = 0; i < sequence.length; i++) {
    let sum = 0;
    let start = i;
    let end = 0;
    for (let j = i; j < sequence.length; j++) {
      if (sum >= k) break;
      sum += sequence[j];
      end = j;
    }
    if (sum === k) {
      answer.push([start, end]);
      lengthList.push(end - start);
    }
  }
  if (answer.length === 1) return answer[0];
  return answer[lengthList.indexOf(Math.min(...lengthList))];
}
*/
