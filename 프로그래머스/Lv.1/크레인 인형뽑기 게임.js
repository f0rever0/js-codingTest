const solution = (board, moves) => {
  let basket = []; // 바구니에 담은 인형
  let result = 0; // 뽑은 인형 수

  for (let i = 0; i < moves.length; i++) {
    for (j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        // 바구니에 담긴 이전 요소와 같을 때
        if (board[j][moves[i] - 1] === basket[basket.length - 1]) {
          basket.pop();
          result += 2;
          // console.log(basket)
        } else {
          basket.push(board[j][moves[i] - 1]);
        }
        board[j][moves[i] - 1] = 0; // 인형을 바구니에 넣으면 그 자리는 0으로
        break;
      }
    }
  }

  return result;
};
