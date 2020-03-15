class Node {
  constructor(data) {
    this.data = data;
    this.previousElement = null;
    this.nextElement = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(-1);
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }
}

module.exports = LinkedList;
module.exports.Node = Node;
