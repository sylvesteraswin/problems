function minimumSwaps(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i < arr[i] - 1) {
      swap(arr, i, Math.min(arr.length, arr[i] - 1));
      swaps++;
      i--;
    }
  }

  return swaps;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(minimumSwaps([2, 3, 4, 1, 5]));
