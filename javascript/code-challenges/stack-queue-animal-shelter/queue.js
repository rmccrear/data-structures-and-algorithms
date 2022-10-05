class Node {
  constructor(n) {
    this.next = null;
    this.value = n;
  }
}

// Queue with push and pop
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(n) {
    if (!this.tail) {
      this.tail = new Node(n);
      this.head = this.tail;
    } else if (this.tail === this.head) {
      this.tail = new Node(n);
      this.head.next = this.tail;
    } else {
      this.tail.next = new Node(n);
      this.tail = this.tail.next;
    }
  }
  pop() {
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return value;
  }
  push(n) {
    const temp = new Node(n);
    temp.next = this.head;
    this.head = temp;
    if (this.tail === null) {
      this.tail = this.head;
    }
  }
  peek() {
    return this.head.value;
  }

  dequeue() {
    return this.pop();
  }
  isEmpty() {
    return this.head === null;
  }
}

module.exports = Queue;
