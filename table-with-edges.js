function chunkArray(myArray, chunkSize) {
  let index = 0;
  const arrayLength = myArray.length;
  const tempArray = [];

  for (index = 0; index < arrayLength; index += chunkSize) {
    const myChunk = myArray.slice(index, index + chunkSize);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
}

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const findLargestLength = A.reduce((acc, curr) => {
    const currStringArr = curr.toString().split("");
    if (acc === 0 || acc < currStringArr.length) {
      acc = currStringArr.length;
    }
    return acc;
  }, 0);

  const tableArr = A.map(curr => {
    const currStringArr = curr.toString().split("");
    const remaining = Array.from(
      new Array(findLargestLength - currStringArr.length)
    ).map(() => " ");
    return remaining.concat(currStringArr).join("");
  });

  const chunkedArrayResult = chunkArray(tableArr, K);

  const createDashes = index =>
    Array.from(new Array(index))
      .map(() => "-")
      .join("");
  chunkedArrayResult.forEach((arr, index) => {
    if (index === 0) {
      const topRow = [...arr]
        .map(
          (_, ti) =>
            `+${createDashes(findLargestLength)}${
              ti === arr.length - 1 ? `+` : ``
            }`
        )
        .join("");
      console.log(topRow);
    }
    const dataRow = [...arr]
      .map((v, di) => `|${v}${di === arr.length - 1 ? `|` : ``}`)
      .join("");
    console.log(dataRow);
    const bottomRow = [...arr]
      .map(
        (_, ti) =>
          `+${createDashes(findLargestLength)}${
            ti === arr.length - 1 ? `+` : ``
          }`
      )
      .join("");
    console.log(bottomRow);
  });
}

console.log(solution([45, 35, 80, 123, 1], 3));
