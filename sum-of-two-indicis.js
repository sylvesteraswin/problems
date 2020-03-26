function twoSum(nums, target) {
  const map = {};
  nums.forEach((n, i) => {
    map[n] = i;
  });

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map[diff] && map[diff] !== i) {
      return [i, map[diff]];
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 13));
// // 2, 7 => 2, 11
console.log(twoSum([2, 7, 11, 15], 18));
console.log(twoSum([0, 4, 3, 0], 3));
// 2, 7 =>
