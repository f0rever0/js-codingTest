const solution = (skill, skill_trees) => {
  let count = 0;
  const regex = new RegExp(`[^${skill}]`, "g");

  // indexOf("찾을 문자열") : 찾은 문자열의 시작 위치를 반환, 찾을 문자열이 없을 경우 -1 반환
  skill_trees.forEach((item) => {
    if (skill.indexOf(item.replace(regex, "")) === 0) count++;
  });
  return count;
};
