
const Graph= require('./graph-breadth-first');

describe('Graph Breadth First Traversal', () => {
  test('should traverse a graph', () => {
    const g = new Graph();
    const expectedTraversal = ['A', 'B', 'C', 'E', 'D'];
    const traversal = [];
    g.breadthFirstTraversal((n) => traversal.push(n));
    expect(traversal).toEqual(expectedTraversal);
  });
});