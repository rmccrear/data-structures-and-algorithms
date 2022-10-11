class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

function listFromArray(arr) {
  let i = 0;
  const head = new Node(arr[i++]);
  let node = head;
  while (i < arr.length) {
    node.next = new Node(arr[i++]);
    node = node.next;
  }
  return head;
}

function arrayFromList(head) {
  const arr = [];
  let node = head;
  while (node) {
    arr.push(node.value);
    node = node.next;
  }
  return arr;
}

function mergeLists(head1, head2) {
  let headDummy, node1, node2, node;
  node1 = head1;
  node2 = head2;
  headDummy = new Node("X");
  node = headDummy;
  while (node1 || node2) {
    if (node1) {
      node.next = node1;
      node = node.next; // node = node1
      node1 = node1.next; // move node1
    }
    if (node2) {
      node.next = node2;
      node = node.next;
      node2 = node2.next;
    }
  }
  return headDummy.next;
}

function mergeSortedLists(head1, head2) {
  let headDummy, node1, node2, node;
  node1 = head1;
  node2 = head2;
  headDummy = new Node("X");
  node = headDummy;
  while (node1 || node2) {
    if (node1 && (!node2 || node1.value < node2.value)) {
      node.next = node1;
      node = node.next; // node = node1
      node1 = node1.next; // move node1
    }
    if (node2 && (!node1 || node2.value < node1.value)) {
      node.next = node2;
      node = node.next;
      node2 = node2.next;
    }
  }
  return headDummy.next;
}

module.exports = {
  mergeLists,
  mergeSortedLists,
  listFromArray,
  arrayFromList,
};
