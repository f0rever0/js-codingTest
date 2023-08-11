function solution(arrayA, arrayB) {
  arrayA = arrayA.sort((a, b) => a - b);
  arrayB = arrayB.sort((a, b) => a - b);

  function divisor(arrayX, arrayY) {
    for (let i = arrayX[0]; i > 0; i--) {
      if (
        arrayX.every((num) => num % i === 0) &&
        arrayY.every((num) => num % i !== 0)
      )
        return i;
    }
    return 0;
  }
  return Math.max(divisor(arrayA, arrayB), divisor(arrayB, arrayA));
}
