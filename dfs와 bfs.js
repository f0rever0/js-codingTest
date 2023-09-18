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

// 프로그래머스 - 네트워크문제
function dfs(graph2, v, visited) {
  // 현재 노드를 방문 처리
  visited[v] = true;
  console.log(v);

  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (let node of graph2[v]) {
    if (!visited[node]) {
      dfs(graph2, node, visited);
    }
  }
}

const graph2 = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
const visited = Array(7).fill(false);

dfs(graph2, 0, visited);
// 0 1 5 2 4 3

console.log(dfs(graph, "A"));

//-------------------------------------------------//
// 프로그래머스 - 게임 맵 최단거리
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
