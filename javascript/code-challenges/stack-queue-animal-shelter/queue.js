const Stack = require('./stack');

// Queue with push and pop
// implemented with two stacks
class Queue {
  constructor() {
    this.backStack = new Stack();
    this.frontStack = new Stack();
  }
  enqueue(n) {
    this.backStack.push(n);
  }
  pop() {
    if(this.frontStack.isEmpty()){
      while(!this.backStack.isEmpty()){
        this.frontStack.push(this.backStack.pop());
      }
    }
    return this.frontStack.pop();
  }
  push(n) {
    this.frontStack.push(n)
  }
  peek() {
    if(!this.frontStack.isEmpty()){
      return this.frontStack.peek();
    } else {
      while(!this.backStack.isEmpty()){
        this.frontStack.push(this.backStack.pop());
      }
      return this.frontStack.peek();
    }
  }

  dequeue() {
    return this.pop();
  }

  isEmpty() {
    return this.frontStack.isEmpty() && this.backStack.isEmpty();
  }
}

module.exports = Queue;
