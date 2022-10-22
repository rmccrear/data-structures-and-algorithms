class Node {
  constructor(n) {
    this.value = n;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(n) {
    if (this.back === null) {
      this.back = new Node(n);
      this.front = this.back;
    } else if (this.front == this.back) {
      this.front.next = new Node(n);
      this.back = this.front.next;
    } else {
      this.back.next = new Node(n);
      this.back = this.back.next;
    }
  }
  dequeue() {
    if (this.back === this.front) {
      const value = this.front.value;
      this.front = null;
      this.back = null;
      return value;
    } else {
      const value = this.front.value;
      this.front = this.front.next;
      return value;
    }
  }
  isEmpty() {
    return this.front === null;
  }
}
module.exports = Queue;
