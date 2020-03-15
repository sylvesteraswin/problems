function hourglassSum(arr) {
  function checkIfHasUndefined(list) {
    return !list.some(v => v === undefined);
  }
  const result = arr.reduce((acc, curr, index, original) => {
    for (let next = 0; next < curr.length; next++) {
      const finalAcc = [];
      const firstRow = [
        original[index][next],
        original[index][next + 1],
        original[index][next + 2]
      ];
      const secondRow = original[index + 1] && [original[index + 1][next + 1]];
      const thirdRow = original[index + 2] && [
        original[index + 2][next],
        original[index + 2][next + 1],
        original[index + 2][next + 2]
      ];
      if (
        checkIfHasUndefined(firstRow) &&
        secondRow &&
        checkIfHasUndefined(secondRow) &&
        thirdRow &&
        checkIfHasUndefined(thirdRow)
      ) {
        finalAcc.push(firstRow);
        finalAcc.push(secondRow);
        finalAcc.push(thirdRow);
      }

      if (finalAcc.length > 0) {
        acc.push(finalAcc);
      }
    }
    return acc;
  }, []);

  let hourGlass;
  let sum;
  for (const li of result) {
    const tempSum = [].concat
      .apply([], li)
      .reduce((acc, curr) => (acc = acc + curr), 0);
    if (tempSum > sum || sum === undefined) {
      sum = tempSum;
      hourGlass = li;
    }
  }

  console.log(hourGlass);
  return sum;
}

console.log(
  hourglassSum([
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
  ])
);

// 0, 0 => 0,0; 0,1; 0,2; 1,1; 2,0; 2,1; 2,2;
// 0, 1 => 0,1; 0,2; 0,3; 1,2; 2,1; 2,1; 2,3;
// 0, 2 => 0,2; 0,3; 0,4; 1,3; 2,2; 2,3; 2,4;
// 0, 3 => 0,3; 0,4; 0,5; 1,4; 2,3; 2,4; 2,5;

// n  = 0;
// m = 0
// n, m,
// n, m + 1,
// n, m + 2,
// n + 1, m + 1,
// n+2, m,
// n+2, m + 1,
// n+2, m + 2,
