const Stack = require("./stack");

class PseudoQueue {
  constructor() {
    this.stackBack = new Stack();
    this.stackFront = new Stack();
  }

  enqueue(value) {
    this.stackBack.push(value);
  }
  dequeue() {
    if (!this.stackFront.isEmpty()) {
      return this.stackFront.pop();
    } else {
      while (!this.stackBack.isEmpty()) {
        this.stackFront.push(this.stackBack.pop());
      }
      return this.stackFront.pop();
    }
  }
  isEmpty() {
    return this.stackFront.isEmpty() && this.stackBack.isEmpty();
  }
  peek() {
    if (this.stackFront.isEmpty()) {
      while (!this.stackBack.isEmpty()) {
        this.stackFront.push(this.stackBack.pop());
      }
    }
    return this.stackFront.top.value;
  }
}

module.exports = PseudoQueue;
