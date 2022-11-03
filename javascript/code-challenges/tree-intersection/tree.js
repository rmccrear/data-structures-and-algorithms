class Node { 
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree { 
  constructor() { 
    this.root = null;
  }

  append(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let node = this.root;
      let done = false;
      while (!done) {
        if (node.value < value) {
          if (node.right === null) { node.right = new Node(value); done = true; }
          else { node = node.right; }
        } else if (value < node.value) {
          if (node.left === null) { node.left = new Node(value); done = true; }
          else { node = node.left; }
        } else { done = true; }
      }
    }
  }

  inOrderTraversal(fn) {
    inOrderTraversal(this.root, fn);
  }
}

const inOrderTraversal = (node, fn) => {
  if (node) {
    inOrderTraversal(node.left, fn);
    fn(node.value);
    inOrderTraversal(node.right, fn);
  }
};

module.exports = Tree;