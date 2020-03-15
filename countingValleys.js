function countingValleys(n, s) {
  let base = 0;
  let noOfValley = 0;
  const array = s.split("");
  for (let i = 0; i < array.length; i++) {
    let commingFromValley = base;
    if (array[i] === "U") {
      base++;
    } else if (array[i] === "D") {
      base--;
    }

    if (commingFromValley === -1 && base === 0) {
      noOfValley++;
    }
  }

  return noOfValley;
}

console.log(countingValleys(14, "DDUDUUUUDDDDUU"));
