const solution = (n, arr1, arr2) => {
  let dp = new Array(n).fill(0);
  let arr1Binary = arr1.map((number) => number.toString(2).padStart(n, "0"));
  let arr2Binary = arr2.map((number) => number.toString(2).padStart(n, "0"));
  for (let i = 0; i < arr1Binary.length; i++) {
    let tempString = "";
    for (let j = 0; j < arr1Binary[0].length; j++) {
      (arr1Binary[i][j] === "1") | (arr2Binary[i][j] === "1")
        ? (tempString += "#")
        : (tempString += " ");
    }
    dp[i] = tempString;
  }
  return dp;
};
