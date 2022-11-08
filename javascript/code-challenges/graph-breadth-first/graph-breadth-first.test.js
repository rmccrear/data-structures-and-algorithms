
const Graph= require('./graph-breadth-first');

describe('Graph Breadth First Traversal', () => {
  test('should traverse a graph', () => {
    const g = new Graph();
    const A = g.addVertex('A');
    const B = g.addVertex('B');
    const C = g.addVertex('C');
    const D = g.addVertex('D');
    const E = g.addVertex('E');
    g.addEdge(A, B);
    g.addEdge(B, C);
    g.addEdge(B, E);
    g.addEdge(C, D);
    g.addEdge(D, E);
    g.addEdge(D, B);
    g.addEdge(E, A);

    const expectedTraversal = ['A', 'B', 'C', 'E', 'D'];
    const traversal = [];
    g.breadthFirstTraversal(A, (n) => traversal.push(n));
    expect(traversal).toEqual(expectedTraversal);
  });
});
