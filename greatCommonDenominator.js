function generalizedGCD(num, arr) {
  // Instead of sort, just get the lowerst
  const lowest = Math.min(...arr);
  let didYouFindIt = true;
  for (let i = lowest; i > 1; i--) {
    for (let j = 0; j < num; j++) {
      if (arr[j] % i !== 0) {
        didYouFindIt = false;
        break;
      }
    }
    if (didYouFindIt) {
      return i;
    }
  }
  return 1;
}

console.log(generalizedGCD(3, [13, 13, 13]));
