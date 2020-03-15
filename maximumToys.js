function maximumToys(prices, k) {
  const mayBeArray = prices.filter(a => a <= k).sort((a, b) => a - b);

  let toys = 0;
  let totalBudget = k;
  for (const price of mayBeArray) {
    if (price < totalBudget) {
      toys++;
      totalBudget -= price;
    }
  }

  console.log(toys);
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
