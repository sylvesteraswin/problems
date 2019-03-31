function prioritizedOrders(numOrders, orderList) {
  const nonPrime = orderList.filter(order => /\W\d+\W/.test(order));
  const prime = orderList
    .filter(order => !/\W\d+\W/.test(order))
    .map(value => {
      return {
        original: value,
        id: value.substr(0, value.indexOf(" ")),
        alpha: value.substr(value.indexOf(" ") + 1)
      };
    });
  prime.sort(function(a, b) {
    return a.alpha.localeCompare(b.alpha) || a.id.localeCompare(b.id);
  });
  return [...prime.map(({ original }) => original), ...nonPrime];
}

console.log(
  prioritizedOrders(5, [
    "mi2 jog mid pet",
    "ai2 xog mid pet",
    "wz3 34 54 398",
    "a1 alps cow bar",
    "x4 45 21 7"
  ])
);
