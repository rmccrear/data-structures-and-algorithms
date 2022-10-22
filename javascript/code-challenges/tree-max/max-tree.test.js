const Tree = require("./tree")

describe('Tree Max', () => {
    test('should build a tree', () => {
        const tree = new Tree();
        tree.insert(3)
        tree.insert(1)
        tree.insert(2)
        tree.insert(4)
        tree.insert(5)
        tree.insert(6)
        expect(tree.root.value).toBe(3)
        expect(tree.root.left.value).toBe(1)
        expect(tree.root.right.value).toBe(4)
    });

    test('should find the max value of a tree', () => {
        const tree = new Tree();
        tree.insert(3)
        tree.insert(1)
        tree.insert(2)
        tree.insert(4)
        tree.insert(5)
        tree.insert(6)
        expect(tree.maxValue()).toBe(6)
    });
    
});