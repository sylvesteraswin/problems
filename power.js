function power(base, exponent) {
  if (exponent < 0) {
    return "not possible";
  }

  let result = 1;
  while (exponent) {
    if ((exponent & 1) === 1) {
      result *= base;
    }
    exponent = exponent >> 1;
    base *= base;
  }

  return result;
}

console.log(power(3, 3));
