function solution(A) {
  const tracker = {};
  A.split("\n").forEach(v => {
    const matchArray = v.match(/(\d+):(\d+):(\d+),(.+)/);
    let cost;
    if (parseInt(matchArray[2]) < 5 && parseInt(matchArray[1]) === 0) {
      // 3 cents calculation
      cost = (parseInt(matchArray[2]) * 60 + parseInt(matchArray[3])) * 3;
    } else {
      // 150 cent calculation
      cost =
        (parseInt(matchArray[1]) * 60 +
          parseInt(matchArray[2]) +
          (parseInt(matchArray[3]) > 0 ? 1 : 0)) *
        150;
    }
    if (!tracker[matchArray[4]]) {
      tracker[matchArray[4]] = cost;
    } else {
      tracker[matchArray[4]] = tracker[matchArray[4]] + cost;
    }
  });

  const splitAndGetValue = value =>
    value
      .replace(/-/g, "")
      .split("")
      .reduce((acc, curr) => {
        acc = acc + parseInt(curr, 10);
        return acc;
      }, 0);

  const sortedTracker = Object.keys(tracker)
    .sort((a, b) => tracker[b] - tracker[a])
    .reduce((acc, curr) => {
      if (!acc) {
        acc = { id: curr, value: tracker[curr] };
        return acc;
      }
      if (tracker[curr] === acc.value) {
        // This is the case when the value is same
        const currNumValue = splitAndGetValue(curr);
        const accNumValue = splitAndGetValue(acc.id);
        if (currNumValue < accNumValue) {
          acc = { id: curr, value: tracker[curr] };
        }
      }
      return acc;
    }, undefined);
  delete tracker[sortedTracker.id];
  return Object.keys(tracker).reduce((acc, curr) => {
    acc = acc + tracker[curr];
    return acc;
  }, 0);
}

console.log(
  solution(`00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:00,400-234-090`)
);
