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
    if (this.top === null) this.top = new Node(n);
    else {
      const temp = new Node(n);
      temp.next = this.top;
      this.top = temp;
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
    if (this.top === null) return true;
    else return false;
  }
}

module.exports = Stack;
