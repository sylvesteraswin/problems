function minimumBribes(arr) {
  let counter = 0;
  let currentPosition = arr.length - 1;
  let bribes;

  while (currentPosition >= 0) {
    const current = arr[currentPosition];
    const orderPosition = currentPosition + 1;
    bribes = current - orderPosition;

    if (bribes >= 3) {
      console.log("Too chaotic");
      return;
    }

    const bribePosition = current - 2;

    for (let i = Math.max(0, bribePosition); i < currentPosition; i++) {
      const compare = arr[i];
      if (compare > current) {
        counter++;
      }
    }
    currentPosition--;
  }

  console.log(counter);
}

console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]));

/* 
[1, 2, 5, 3, 7, 8, 6, 4]

[1, 2, 5, 3, 7, 6, 8, 4] => 8  
[1, 2, 5, 3, 7, 6, 4, 8] => 8
[1, 2, 5, 3, 6, 7, 4, 8] => 6
[1, 2, 5, 3, 6, 4, 7, 8] => 7
[1, 2, 5, 3, 4, 6, 7, 8] => 6
[1, 2, 3, 5, 4, 6, 7, 8] => 5
[1, 2, 3, 4, 5, 6, 7, 8] => 5
*/
