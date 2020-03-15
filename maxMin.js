function maxMin(arr) {
  const result = [];
  let i = 0;
  let j = arr.length - 1;

  while (i !== j && i < j) {
    console.log(i, j);
    result.push(arr[j]);
    result.push(arr[i]);
    i++;
    j--;
  }
  if (arr.length !== result.length) {
    result.push(arr[i]);
  }
  return result;
}
console.log(maxMin([1, 2, 3, 4, 5]));
