class Node {
  constructor(val) {
    this.value = val;
  }
}
class LinkedList {
  appendArrayValues(arr) {
    let i = 0;
    let node = this.head;
    if (!this.head) {
      // intialize list
      this.head = new Node(arr[i++]);
      node = this.head;
    }
    while (node.next) {
      // move to end
      node = node.next;
    }
    while (i < arr.length) {
      node.next = new Node(arr[i++]);
      node = node.next;
    }
  }
  zipWithList(list2) {
    return zipLists(this, list2);
  }
  toArray() {
    const arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }
}

function zipLists(list1, list2) {
  const list = new LinkedList();
  let node;
  let node1 = list1.head;
  let node2 = list2.head;
  if (node1) {
    list.head = new Node(list1.head.value);
    node = list.head;
    node1 = node1.next;
  } else if (node2) {
    //list1 is empty
    list.head = new Node(list2.head.value);
    node = list.head;
    node2 = node2.next;
  } else {
    // two empty lists
    return list;
  }
  while (node1 || node2) {
    // do node2 first, because we may have done node1 already.
    if (node2) {
      node.next = new Node(node2.value);
      node = node.next;
      node2 = node2.next;
    }
    if (node1) {
      node.next = new Node(node1.value);
      node = node.next;
      node1 = node1.next;
    }
  }
  return list;
}

module.exports = LinkedList;
