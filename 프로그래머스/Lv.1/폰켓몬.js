const solution = (nums) => {
  const pickNumber = nums.length / 2;
  const set = new Set(nums);

  return pickNumber >= set.size ? set.size : pickNumber;
};
