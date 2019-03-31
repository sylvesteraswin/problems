function cellCompete(states, days) {
  // WRITE YOUR CODE HERE
  let temp = [...states];
  for (let i = 1; i <= days; i++) {
    const track = [];
    for (let j = 0; j < temp.length; j++) {
      let prev = j === 0 ? 0 : temp[j - 1];
      let next = j + 1 === temp.length ? 0 : temp[j + 1];
      if (prev === next) {
        track.push(0);
      } else {
        track.push(1);
      }
    }
    temp = [...track];
  }
  return temp;
}

console.log(cellCompete([1, 1, 1, 0, 1, 1, 1, 1], 2));
