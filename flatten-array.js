function flattenArray(arr) {
  return arr.reduce((acc, curr) => {
    if (!Array.isArray(curr)) {
      acc.push(curr);
    } else {
      acc = acc.concat(flattenArray(curr));
    }
    return acc;
  }, []);
}

console.log(flattenArray([4, [3, 6, [9, 1, 9, [5, 1]]], 8]));
