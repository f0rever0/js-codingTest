const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "F"],
  E: ["C", "G"],
  F: ["D", "H", "I"],
  G: ["E", "J", "K"],
  H: ["F", "L"],
  I: ["F", "M"],
  J: ["G", "N"],
  K: ["G", "O"],
  L: ["H"],
  M: ["I", "P"],
  N: ["J"],
  O: ["K"],
  P: ["M"],
};

const dfs = (graph, startNode) => {
  const visited = [];
  const willVisited = [];

  willVisited.push(startNode);

  while (willVisited.length !== 0) {
    const currentNode = willVisited.pop(); // dfs : stack
    if (!visited.includes(currentNode)) {
      visited.push(currentNode);
      willVisited.push(...graph[currentNode]);
    }
  }
};

console.log(dfs(graph, "A"));

const bfs = (graph, startNode) => {
  const visited = [];
  const willVisited = [];

  willVisited.push(startNode);

  while (willVisited.length !== 0) {
    const currentNode = willVisited.shift(); // bfs : queue
    if (!visited.includes(currentNode)) {
      visited.push(currentNode);
      willVisited.push(...graph[currentNode]);
    }
  }
};

console.log(bfs(graph, "A"));
