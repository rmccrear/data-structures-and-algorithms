class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    const traversal = [];
    const traverse = (node) => {
      traversal.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return traversal;
  }
  inOrder() {
    const traversal = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      traversal.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return traversal;
  }
  postOrder() {
    const traversal = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      traversal.push(node.value);
    };
    traverse(this.root);
    return traversal;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }
  add(n) {
    if (this.root === null) {
      this.root = new Node(n);
    } else {
      const findNode = (node) => {
        if (n < node.value) {
          if (node.left === null) {
            node.left = new Node(n);
            return node.left;
          } else {
            findNode(node.left);
          }
        } else if (node.value < n) {
          if (node.right === null) {
            node.right = new Node(n);
          } else {
            findNode(node.right);
          }
        } else {
          node.value = n; // noop
        }
      };
      findNode(this.root);
    }
  }
}

module.exports = { BinarySearchTree };
