function findSecondMaximum(arr) {
  let large = arr[0];
  let secondLarge;

  for (const value of arr) {
    if (value > large) {
      // value is greater than both
      // move large to secondLarge
      // assign value to large
      secondLarge = large;
      large = value;
    } else if (value > secondLarge) {
      // value is greater than secondLarge
      // but less than large
      // replace secondLarge with value
      secondLarge = value;
    }
  }

  return secondLarge;
}

console.log(findSecondMaximum([4, 2, 1, 5, 0]));
