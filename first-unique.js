function findFirstUnique(arr, n) {
  return arr.filter(value => arr.indexOf(value) === arr.lastIndexOf(value))[0];
}

console.log(findFirstUnique([9, 2, 3, 2, 6, 6]));
