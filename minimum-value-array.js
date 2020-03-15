function findMinimum(arr) {
  let minimumValue;

  for (const value of arr) {
    if (minimumValue === undefined) {
      minimumValue = value;
    }

    if (value < minimumValue) {
      minimumValue = value;
    }
  }

  return minimumValue;
}

console.log(findMinimum([9, 2, 3, 6]));
