function factorial(n) {
  return Array.from(Array(n)).reduce((acc, curr, index) => {
    return acc * (index + 1);
  }, 1);
}

console.log(factorial(4));
