const arr1 = [1, 3, 4, 5];
const arr2 = [2, 6, 7, 8];

function mergeArrays(arr1, arr2) {
  let output = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      output.push(arr1[i]);
      i++;
    }

    if (arr2[j] < arr1[i]) {
      output.push(arr2[j]);
      j++;
    }
  }

  if (i !== arr1.length) {
    output = output.concat(arr1.slice(i, arr1.length));
  }

  if (j !== arr2.length) {
    output = output.concat(arr2.slice(j, arr2.length));
  }
  return output;
}

console.log(mergeArrays(arr1, arr2));
