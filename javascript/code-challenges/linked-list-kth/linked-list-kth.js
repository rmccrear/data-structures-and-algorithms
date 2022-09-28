class Node {
  constructor(val) {
    this.value = val;
  }
}

class LinkedList {
  append(val) {
    if (!this.head) {
      this.head = new Node(val);
      return this.head;
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(val);
    }
  }

  kthFromRear(k) {
    let node, backNode, i;
    node = this.head;
    backNode = this.head;
    i = 1;
    while (node.next) {
      if (i >= k) {
        backNode = backNode.next;
      }
      node = node.next;
      i++;
    }
    return backNode.value;
  }
}

module.exports = LinkedList;
