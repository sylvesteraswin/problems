function getProduct(arr) {
  return arr.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
}

function findProduct(arr) {
  const product = getProduct(arr);

  return arr.map((value, index) => {
    if (value === 0) {
      const noneZeroArray = [...arr];
      noneZeroArray.splice(index);
      return getProduct(noneZeroArray);
    } else {
      return product / value;
    }
  });
}

console.log(findProduct([1, 2, 3, 4, 0]));
