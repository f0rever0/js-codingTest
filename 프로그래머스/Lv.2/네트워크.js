function solution(n, computers) {
  let graph = [];
  let answer = 0;
  const visited = Array(n).fill(false);

  computers.forEach((line, iIndex) => {
    line.forEach((computer, jIndex) => {
      if (computer === 1 && iIndex !== jIndex) {
        if (graph[iIndex]) {
          graph[iIndex].push(jIndex);
        } else {
          graph[iIndex] = [jIndex];
        }
      }
    });
  });

  // graph : [ [ 1 ], [ 0, 2 ], [ 1 ] ]

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      dfs(graph, i, visited);
      answer++;
    }
  }

  return answer;
}

function dfs(graph, v, visited) {
  // 현재 노드를 방문 처리
  visited[v] = true;

  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  if (graph[v]) {
    // 노드가 있을때만 for문 돌기
    for (let node of graph[v]) {
      if (!visited[node]) {
        dfs(graph, node, visited);
      }
    }
  }
}
