function findSum(arr, value) {
  const map = {};
  let isValid = false;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      isValid = `${map[arr[i]]},${arr[i]}`;
    } else {
      const reminder = value - arr[i];
      if (!map[reminder]) {
        map[reminder] = arr[i];
      }
    }
  }
  return isValid;
}

console.log(findSum([1, 21, 3, 14, 5, 60, 7, 6], 81));
