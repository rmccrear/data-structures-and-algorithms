class Node {
  next = null;
  constructor(n) {
    this.value = n;
  }
}

class Queue {
  back = null;
  front = null;
  enqueue(n) {
    if (!this.back) {
      this.back = new Node(n);
      this.front = this.back;
    } else {
      this.back.next = new Node(n);
      this.back = this.back.next;
    }
  }
  dequeue() {
    const val = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      this.back = this.front;
    }
    return val;
  }
  peek() {
    return this.front.value;
  }
  isEmpty() {
    return !this.front;
  }
}
module.exports = Queue;
