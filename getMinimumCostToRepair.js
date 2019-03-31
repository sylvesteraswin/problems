function minNode(n, keyValue, isMstSet) {
  let min = Infinity;
  let minIndex;

  for (let i = 0; i < n; i++) {
    if (isMstSet[i] === false && keyValue[i] < min) {
      min = keyValue[i];
      minIndex = i;
    }
  }

  return minIndex;
}

function getMinimumCostToRepair(
  numTotalAvailableCities,
  numTotalAvailableRoads,
  roadsAvailable,
  numRoadsToBeRepaired,
  costRoadsToBeRepaired
) {
  // WRITE YOUR CODE HERE

  const matix = Array.from(Array(numTotalAvailableCities)).map(() => {
    return Array.from(Array(numTotalAvailableCities)).map(() => 0);
  });
  roadsAvailable.forEach(road => {
    matix[road[0] - 1][road[1] - 1] = 1;
  });
  costRoadsToBeRepaired.forEach(road => {
    matix[road[0] - 1][road[1] - 1] = road[2];
  });

  const parent = [];
  const keyValue = [];
  const isMstSet = [];

  for (let i = 0; i < numTotalAvailableRoads; i++) {
    keyValue[i] = Infinity;
    isMstSet[i] = false;
  }

  parent[0] = -1;
  keyValue[0] = 0;

  for (let i = 0; i < numTotalAvailableCities - 1; i++) {
    let minIndex = minNode(numTotalAvailableCities, keyValue, isMstSet);

    isMstSet[minIndex] = true;

    for (let j = 0; j < numTotalAvailableCities; j++) {
      if (
        matix[minIndex][j] &&
        isMstSet[j] === false &&
        matix[minIndex][j] < keyValue[j]
      ) {
        keyValue[j] = matix[minIndex][j];
        parent[j] = minIndex;
      }
    }
  }

  let cost = 0;

  for (let i = 1; i < numTotalAvailableCities; i++) {
    cost += matix[parent[i]][i];
  }

  return cost;
}

console.log(
  getMinimumCostToRepair(
    6,
    6,
    [[1, 2], [2, 3], [4, 5], [3, 5], [1, 6], [2, 4]],
    2,
    [[1, 6, 410], [2, 4, 800]]
  )
);
