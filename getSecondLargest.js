function getSecondLargest(nums) {
  let largest = nums[0];
  let secondLargest;

  for (const value of nums) {
    if (value > largest) {
      secondLargest = largest;
      largest = value;
    } else if (value > secondLargest && value < largest) {
      secondLargest = value;
    }
  }

  return secondLargest;
}

console.log(getSecondLargest([2, 3, 6, 6, 5]));
