const Queue = require("./data-types/queue.js");

const queue = new Queue();

console.log(queue.dequeue());
// Adding elements to the queue
// queue contains [10, 20, 30, 40, 50]

console.log(">> Addding 10");
queue.enqueue(10);

console.log(">> Addding 20");
queue.enqueue(20);

console.log(">> Addding 30");
queue.enqueue(30);

console.log(">> Addding 40");
queue.enqueue(40);

console.log(">> Addding 50");
queue.enqueue(50);

console.log(">> Addding 60");
queue.enqueue(60);

// returns 10
console.log(">> First", queue.front());

// removes 10 from the queue
// queue contains [20, 30, 40, 50, 60]
console.log(">> Dequeue", queue.dequeue());

// returns 20
console.log(">> Front", queue.front());

// removes 20
// queue contains [30, 40, 50, 60]
console.log(">> Dequeue", queue.dequeue());

// printing the elements of the queue
// prints [30, 40, 50, 60]
console.log(">> Print", queue.printQueue());
