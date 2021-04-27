function clockAngle(h, m) {
  if (h === 12) {
    h = 0;
  }
  if (m === 60) {
    m = 0;
    h += 1;
    if (h > 12) {
      h = h - 12;
    }
  }

  let hrAngle = (h * 60 + m) * 0.5;
  let minAngle = m * 6;

  let diff = Math.abs(hrAngle - minAngle);

  return Math.min(360 - diff, diff);
}

console.log(clockAngle(9, 60));
console.log(clockAngle(3, 30));
