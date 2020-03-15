function sortArrays(arrA, arrB) {
  for (let i = 0; i < arrB.length; i++) {
    let temp = arrB[i];

    while (temp !== i) {
      swapArr(arrB, temp, i);
      swapArr(arrA, temp, i);

      temp = arrB[i];
    }
  }

  function swapArr(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arrA;
}

console.log(sortArrays(["C", "D", "E", "F", "G"], [3, 0, 4, 1, 2]));
