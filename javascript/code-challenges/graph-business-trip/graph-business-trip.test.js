const Graph = require('./graph-business-trip');

describe('Path calculator', () => {
  test('should calculate the cost of a path', () => {
    const g = new Graph();
    const A = g.addVertex('A');
    const B = g.addVertex('B');
    const C = g.addVertex('C');
    const D = g.addVertex('D');
    const E = g.addVertex('E');
    const F = g.addVertex('F');
    g.addEdge(A, B, 150);
    g.addEdge(B, A, 150);
    g.addEdge(A, F, 82);
    g.addEdge(F, A, 82);
    g.addEdge(B, C, 42);
    g.addEdge(C, B, 42);
    g.addEdge(B, F, 99);
    g.addEdge(F, B, 99);
    g.addEdge(C, D, 73);
    g.addEdge(D, C, 73);
    g.addEdge(C, F, 105);
    g.addEdge(F, C, 105);
    g.addEdge(D, F, 26);
    g.addEdge(F, D, 26);
    g.addEdge(D, E, 250);
    g.addEdge(E, D, 250);
    g.addEdge(F, E, 37);
    g.addEdge(E, F, 37);

    expect(g.costOfPath([F, A])).toBe(82);
    expect(g.costOfPath([B, C, D])).toBe(115);

    expect(g.costOfPath([A, B, F, C, B, F, D])).toBe(521);

  });

  test('should return null if the path is invalid', () => {
    const g = new Graph();
    const A = g.addVertex('A');
    const B = g.addVertex('B');
    const C = g.addVertex('C');
    const D = g.addVertex('D');
    const E = g.addVertex('E');
    const F = g.addVertex('F');
    g.addEdge(A, B, 150);
    g.addEdge(B, A, 150);
    g.addEdge(A, F, 82);
    g.addEdge(F, A, 82);
    g.addEdge(B, C, 42);
    g.addEdge(C, B, 42);
    g.addEdge(C, D, 73);
    g.addEdge(D, C, 73);
    g.addEdge(C, F, 105);
    g.addEdge(F, C, 105);
    g.addEdge(D, F, 26);
    g.addEdge(F, D, 26);
    g.addEdge(D, E, 250);
    g.addEdge(E, D, 250);
    g.addEdge(F, E, 37);
    g.addEdge(E, F, 37);

    expect(g.costOfPath([D, A])).toBe(null);
    expect(g.costOfPath([E, B, D])).toBe(null);
  });
});
