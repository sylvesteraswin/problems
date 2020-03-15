class Node {
  constructor(data) {
    this.data = data;
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

  getHead() {
    return this.head;
  }

  insertAtHead(data) {
    const tempNode = new Node(data);
    tempNode.nextElement = this.head.nextElement;
    this.head.nextElement = tempNode;
    this.length++;
    return this;
  }

  deleteByValue(data) {
    let currentNode = this.getHead();

    while (currentNode.nextElement !== null) {
      if (currentNode.nextElement.data === data) {
        currentNode.nextElement = currentNode.nextElement.nextElement;
        this.length--;
      } else {
        currentNode = currentNode.nextElement;
      }
    }
    return this;
  }

  // -1 -> 0 > 1 -> null

  deleteAtHead() {
    const head = this.getHead();
    let firstElement = head.nextElement;

    if (firstElement !== null) {
      head.nextElement = firstElement.nextElement;
      firstElement.nextElement = null;
    }

    this.length--;
    return this;
  }

  search(data) {
    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.getHead().nextElement;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    return false;
  }

  insertAtTail(data) {
    const tempNode = new Node(data);
    let currentNode = this.getHead();

    if (currentNode.nextElement === null) {
      currentNode.nextElement = tempNode;
      this.length++;
      return this;
    }

    while (currentNode.nextElement !== null) {
      currentNode = currentNode.nextElement;
    }

    currentNode.nextElement = tempNode;
    this.length++;
    return this;
  }

  //function to print the linked list
  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } else {
      let temp = this.head.nextElement;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.nextElement;
      }
      console.log("null");
      return true;
    }
  }
}

module.exports = LinkedList;
module.exports.Node = Node;
