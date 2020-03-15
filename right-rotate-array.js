/* 
function rightRotate(arr, n) {
  return (arr.splice(arr.length - n)).concat(arr.splice(0, arr.length))
}
*/

function rightRotate(arr, n) {
  let i = 0;
  while (i < n) {
    const value = arr.splice(-1)[0];
    arr.unshift(value);
    i++;
  }

  return arr;
}

console.log(rightRotate([1, 2, 3, 4, 5], 2));
