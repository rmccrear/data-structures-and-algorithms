const Stack = require("./stack");

class PseudoQueue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(value) {
    const stackA = this.stackA;
    const stackB = this.stackB;
    while (!stackA.isEmpty()) {
      stackB.push(stackA.pop());
    }
    stackA.push(value);
    while (!stackB.isEmpty()) {
      stackA.push(stackB.pop());
    }
  }
  dequeue() {
    return this.stackA.pop();
  }
  isEmpty() {
    return this.stackA.isEmpty();
  }
  peek() {
    return this.stackA.top.value;
  }
}

module.exports = PseudoQueue;
