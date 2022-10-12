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

class Node {
    constructor(n) { 
        this.value = n
        this.left = null
        this.right = null
    }
}

class Tree { 
    constructor() { 
        this.root = null
    }
    insert(n) { 
        if (this.root === null) {
            this.root = new Node(n)
        } else {
            insertFn(this.root, n)
        }

    }
    traverseAndRun(fn) { 
        const q = new Queue()
        q.enqueue(this.root)
        traverseAndRunFn(q, fn)
    }
    levelOrderTraversal() { 
        const collection = []
        const fn = (n) => collection.push(n)
        this.traverseAndRun(fn)
        return collection
    }

}

const traverseAndRunFn = (q, fn) => { 
    let node 
    while (!q.isEmpty()) { 
        const node = q.dequeue()
        fn(node.value)
        if(node.left) q.enqueue(node.left)
        if(node.right) q.enqueue(node.right)
    }

}

const insertFn = (node, n) => { 
    if (n < node.value) {
        if (node.left === null) node.left = new Node(n)
        else insertFn(node.left, n)
    } else if (node.value < n) { 
        if(node.right === null) node.right = new Node(n)
        else insertFn(node.right, n)
    }
}

module.exports = { Tree, Queue };