class Node {
    constructor(n) { 
        this.value = n;
        this.left = null;
        this.right = null;
    }
}

class Tree { 
    constructor() { 
        this.root = null;
    }
    insert(n) {
        if (this.root === null) {
            this.root = new Node(n)
            return
        } else { 
            insertFn(this.root, n)
        }
    }

    maxValue() { 
        let max = Number.NEGATIVE_INFINITY
        const updateOnNode = (node) => { 
            if (max < node.value) { 
                max = node.value
            }
        }
        traverseAndCall(this.root, updateOnNode)
        return max
    }

}

function insertFn(node, n) { 
    if (n < node.value) {
        if (node.left === null) node.left = new Node(n)
        else insertFn(node.left, n)
    } else if (node.value < n) {
        if (node.right === null) node.right = new Node(n)
        else insertFn(node.right, n)
    } else {
        return;
     }
}

class Queue { 
    constructor() { 
        this.arr = []
    }
    enqueue(n) { 
        this.arr.unshift(n)
    }
    dequeue() { 
        return this.arr.pop()
    }
    isEmpty() { 
        return this.arr.length === 0
    }
}

function traverseAndCall(root, fn) { 
    const q = new Queue()
    q.enqueue(root);

    let node;
    while (!q.isEmpty()) { 
        node = q.dequeue()
        fn(node)
        if(node.left !== null) q.enqueue(node.left)
        if(node.right !== null) q.enqueue(node.right)
    }
}

module.exports = Tree;