const solution2 = (n, wires) => {
  let network = {};
  let result = n;

  wires.forEach((wire) => {
    let [start, end] = wire;
    !network[start] ? (network[start] = [end]) : network[start].push(end);
    !network[end] ? (network[end] = [start]) : network[end].push(start);
  });

  function countNode(start, exception) {
    // start에서 exception을 제외하고 연결되어 있는 노드의 갯수
    let count = 0;
    let visited = [];
    let queue = [start];
    visited.push(start);

    while (queue.length) {
      let currentNode = queue.pop();

      network[currentNode].forEach((node) => {
        if (!visited.includes(node) && node !== exception) {
          queue.push(node);
          visited.push(node);
        }
      });

      count++;
    }

    return count;
  }

  wires.forEach((wire) => {
    let [a, b] = wire;
    result = Math.min(result, Math.abs(countNode(a, b) - countNode(b, a)));
  });

  return result;
};

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
