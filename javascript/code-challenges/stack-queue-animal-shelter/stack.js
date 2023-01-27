class Node {
  constructor(value=null){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.next = null;
  }

  push(value) {
    const n = new Node(value);
    n.next = this.top;
    this.top = n;
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
    if(this.top === null) return true;
    else return false;
  }
}

module.exports = Stack;
