function rotLeft(arr, n) {
  while (n > 0) {
    arr.push(arr.shift());
    n--;
  }

  return arr;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
