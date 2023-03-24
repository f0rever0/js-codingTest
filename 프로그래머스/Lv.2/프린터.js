function solution(priorities, location) {
  let first = 0; // 인쇄 대기목록 가장 맨 앞에 있는 문서
  let printCount = 0; // 프린트 횟수
  let currentMyDocumentLocation = location; // 내가 인쇄를 요청한 문서의 인덱스

  while (priorities.length !== 0) {
    first = priorities.shift();

    if (first < Math.max(...priorities)) {
      priorities.push(first);
    } else {
      printCount++;
      if (currentMyDocumentLocation == 0) {
        return printCount;
      }
    }

    currentMyDocumentLocation === 0
      ? (currentMyDocumentLocation = priorities.length - 1)
      : currentMyDocumentLocation--;
  }
}
