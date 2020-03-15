function countSwaps(arr) {
  let swaps = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swaps++;
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log(`Array is sorted in ${swaps} swaps.`);
  console.log(`First Element: ${arr[0]}`);
  console.log(`Last Element: ${arr[arr.length - 1]}`);
}

console.log(countSwaps([10, 5, 1, 3, 2, 8]));
