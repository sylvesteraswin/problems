function rollOFTheDice(arr, missing, mean) {
  console.log("======");
  console.log("arr", arr);
  if (missing < 0 || mean === 0 || mean > 6) {
    return [0];
  }

  const missingArr = Array.from(
    {
      length: missing,
    },
    () => 0
  );

  console.log("missingArr", missingArr);

  const currentArrSum = arr.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
  console.log("currentArrSum", currentArrSum);

  let totalRolls = arr.length + missing;
  console.log("totalRolls", totalRolls);
  let missingDiff = mean * totalRolls - currentArrSum;
  console.log("missingDiff", missingDiff);

  if (missing > missingDiff || missingDiff / missing > 6) {
    return [0];
  }
  for (let i = 0; i < missingArr.length; i++) {
    missingArr[i] = Math.floor(missingDiff / missing);
    --missing;
    missingDiff -= missingArr[i];
  }

  return missingArr;
}

// console.log(rollOFTheDice([3, 2, 4, 3], 2, 4));
console.log(rollOFTheDice([1, 5, 6], 4, 3));
