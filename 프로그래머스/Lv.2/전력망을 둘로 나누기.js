const solution = (n, wires) => {
  let links = {};
  let answer = Number.MAX_SAFE_INTEGER;
  wires.forEach((wire) => {
    const [a, b] = wire;
    links[a] ? links[a].push(b) : (links[a] = [b]);
    links[b] ? links[b].push(a) : (links[b] = [a]);
  });

  const countNode = (start, exception) => {
    // start부터 exception제외 하고 완전 탐색
    let count = 0;
    let visited = [];
    let queue = [start];
    visited[start] = true;

    while (queue.length !== 0) {
      let index = queue.pop();
      links[index].forEach((element) => {
        if (element !== exception && !visited[element]) {
          visited[element] = true;
          queue.push(element);
        }
      });
      count++;
    }

    return count;
  };

  wires.forEach((wire) => {
    const [a, b] = wire;
    answer = Math.min(answer, Math.abs(countNode(a, b) - countNode(b, a)));
  });

  return answer;
};
