const fs = require("fs");
let input = fs.readFileSync("input.txt").toString();
// let input = fs.readFileSync("dev/stdin").toString();

const dialObj = {
  1: "",
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "O"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"],
  0: ["+", "-", "*", "/"],
};

let sum = 0;
input.split("").forEach((str) => {
  Object.entries(dialObj).forEach((list) => {
    const [key, value] = list;
    if (value.includes(str)) sum += Number(key) + 1;
  });
});

console.log(sum);
