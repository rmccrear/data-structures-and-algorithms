const Tree = require('./tree');

describe('Tree', () => {
  test('should build and traverse a tree', () => {
    const tree = new Tree();
    const values = [5, 3, 8, 2, 4, 1, 7, 9, 6];
    for (let val of values) {
      tree.append(val);
    }
    const acc = [];
    tree.inOrderTraversal((val) => acc.push(val));
    expect(acc).toEqual([1,2,3,4,5,6,7,8,9]);
  });
});
