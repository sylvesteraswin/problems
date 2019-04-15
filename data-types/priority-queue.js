class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item, priority) {
    const el = new QElement(item, priority);
    let contains = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > el.priority) {
        this.items.splice(i, 0, el);
        contains = true;
        break;
      }
    }

    if (!contains) {
      this.items.push(el);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "No elements in queue";
    }
    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) {
      return "No elements in queue";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    return this.items.map(({ element }) => element).join(",");
  }
}

module.exports = PriorityQueue;
