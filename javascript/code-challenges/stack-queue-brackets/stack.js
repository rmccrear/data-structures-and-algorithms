class Node {
  constructor(n) {
    this.value = n;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(n) {
    if (this.top === null) {
      this.top = new Node(n);
    } else {
      const temp = this.top;
      this.top = new Node(n);
      this.top.next = temp;
    }
  }
  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }
  peek() {
    return this.top.value;
  }
  isEmpty() {
    return this.top === null;
  }
}
module.exports = Stack;
