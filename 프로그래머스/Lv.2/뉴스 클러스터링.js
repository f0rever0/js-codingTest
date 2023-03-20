const solution = (str1, str2) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let str1List = [];
  let str2List = [];

  for (let i = 0; i < str1.length - 1; i++) {
    let str = str1.charAt(i) + str1.charAt(i + 1);
    if (str.replace(/[a-z]/g, "").length == 0) str1List.push(str);
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const str = str2.charAt(i) + str2.charAt(i + 1);
    if (str.replace(/[a-z]/g, "").length == 0) str2List.push(str);
  }

  const total = str1List.length + str2List.length;
  let intersection = []; // 교집합

  for (let i = 0; i < str1List.length; i++) {
    if (str2List.indexOf(str1List[i]) >= 0) {
      intersection.push(str2List.splice(str2List.indexOf(str1List[i]), 1));
    }
  }

  const union = total - intersection.length;

  return intersection.length === 0 && union === 0
    ? 65536
    : parseInt((intersection.length / union) * 65536);
};
