const solution = (n, lost, reserve) => {
  // 체육복 있으면 = 1, 없으면 = 0, 여벌체육복 있으면 +1
  let students = new Array(n).fill(1);
  lost.forEach((person) => (students[person - 1] = 0));
  reserve.forEach((person) => (students[person - 1] += 1));
  for (let i = 0; i < n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i] = 1;
      students[i - 1] = 1;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i] = 1;
      students[i + 1] = 1;
    }
  }

  return students.filter((c) => c > 0).length;
};
