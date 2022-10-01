class Node {
  next = null;
  constructor(n) {
    this.value = n;
  }
}

class Stack {
  top = null;
  push(n) {
    const temp = this.top;
    this.top = new Node(n);
    this.top.next = temp;
  }
  pop() {
    const val = this.top.value;
    this.top = this.top.next;
    return val;
  }
  peek() {
    return this.top.value;
  }
  isEmpty() {
    return !this.top;
  }
}
module.exports = Stack;
