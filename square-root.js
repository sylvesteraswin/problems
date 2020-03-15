function squareRoot(number) {
  for (let i = 0; i < number; i++) {
    if (i * i === number) {
      return i;
    }
  }

  return number;
}

console.log(squareRoot(16));
