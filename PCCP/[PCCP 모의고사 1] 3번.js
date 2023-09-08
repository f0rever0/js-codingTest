function solution(queries) {
  let answer = [];
  let list = ["rr", "RR", "Rr", "Rr", "rr"];
  queries.forEach((query) => {
    let [generation, number] = query;
    let temp = number;
    if (generation === 1) {
      answer.push(list[0]);
    } else if (generation === 2) {
      answer.push(list[number]);
    } else {
      while (generation > 2) {
        number = Math.ceil(number / 4);
        generation--;
      }
      switch (list[number]) {
        case "RR":
          answer.push("RR");
          break;
        case "Rr":
          answer.push(list[temp % 4]);
          break;
        case "rr":
          answer.push("rr");
          break;
      }
    }
  });

  return answer;
}
