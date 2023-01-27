class Node {
  constructor(value=null){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  enqueue(value){
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if(this.head === this.tail) {
      const value = this.head.value;
      this.tail = null;
      this.head = null;
      return value;
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  }

  peek() {
    return this.head.value;
  }


  isEmpty(){
    if(this.head) return false;
    else return true;
  }
}

module.exports = Queue;
