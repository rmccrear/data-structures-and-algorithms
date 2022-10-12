const { Tree, Queue } = require("./tree")

describe('Tree breadth first', () => {
    test('should build a tree', () => {
        const tree = new Tree()
        tree.insert(5)
        tree.insert(2)
        tree.insert(1)
        tree.insert(3)
        tree.insert(7)
        tree.insert(6)
        tree.insert(8)
        expect(tree.root.value).toBe(5);
        expect(tree.root.left.value).toBe(2);
        expect(tree.root.right.value).toBe(7);
    });
    test('Queue should work', () => {
        const q = new Queue()
        q.enqueue(1)
        q.enqueue(2)
        q.enqueue(3)
        expect(q.dequeue()).toBe(1);
        expect(q.dequeue()).toBe(2);
        expect(q.dequeue()).toBe(3);
        expect(q.isEmpty()).toBe(true);
        
    });
    test('should display a level order traversal', () => {
        const tree = new Tree()
        tree.insert(5)
        tree.insert(2)
        tree.insert(1)
        tree.insert(3)
        tree.insert(7)
        tree.insert(6)
        tree.insert(8)
        const levelOrderTraversal = tree.levelOrderTraversal();
        expect(levelOrderTraversal).toEqual([5, 2, 7, 1, 3, 6, 8]);
        
    });
});