function solution(food) {
  let arr = [];
  food.forEach((count, index) => {
    if (count >= 2) {
      let calorie = index;
      for (let i = 0; i < parseInt(count / 2); i++) {
        arr.unshift(calorie);
      }
    }
  });

  let originalArray = [...arr];
  let reverseArray = arr.reverse();
  return [...reverseArray, 0, ...originalArray].join("");
}
