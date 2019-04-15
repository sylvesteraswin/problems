const PriorityQueue = require("./data-types/priority-queue");

var queue = new PriorityQueue();

console.log(queue.dequeue());

// testing isEmpty and front on an empty queue
// return true
console.log(queue.isEmpty());

// returns "No elements in Queue"
console.log(queue.front());

// adding elements to the queue

queue.enqueue("Sylvester", 2);

queue.enqueue("Aswin", 1);

queue.enqueue("Mona", 1);

queue.enqueue("Stanley", 2);

queue.enqueue("Sophia", 3);

// prints [ Sylvester Stanley Sophia]
console.log(queue.printQueue());

// prints Aswin
console.log(queue.front().element);

// pritns Sophia
console.log(queue.rear().element);

// queue contains
// [Mona,Sylvester,Stanley,Sophia]
console.log(queue.dequeue().element);

// Adding another element to the queue
queue.enqueue("Amazing", 4);

// prints [Mona,Sylvester,Stanley,Sophia,Amazing]
console.log(queue.printQueue());
