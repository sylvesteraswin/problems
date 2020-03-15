const LinkedList = require("./data-types/linked-list-");

const list = new LinkedList();
for (let i = 0; i < 10; i++) {
  list.insertAtTail(i);
}
list.printList();
console.log(list.deleteByValue(4));
list.printList();
