function reverse(x) {
  if (x < 10 && x >= 0) {
    return x;
  }

  let res = 0;
  let val = Math.abs(x);

  while (val > 0) {
    res = res * 10 + (val % 10);
    val = (val / 10) | 0;
    console.log(res, val);
  }
  res *= Math.sign(x);

  return (res | 0) === res ? res : 0;
}

console.log(reverse(1534236469));
