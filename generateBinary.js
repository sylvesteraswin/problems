const Queue = require("./data-types/queue.js");

function generateBinary(n) {
  const q = new Queue();

  q.enqueue("1");

  while (n-- > 0) {
    const s1 = q.front();

    q.dequeue();
    console.log(s1);

    let s2 = s1;
    q.enqueue(`${s1}0`);
    q.enqueue(`${s2}1`);
  }
}

generateBinary(10);
