const Tree = require('./tree');
const { treeIntersection } = require('./tree-intersection');

describe('Tree Intersection', () => {
  test('can import treeIntersection', () => {
    expect(treeIntersection).toBeTruthy();
  });

  test('should find intersection of two trees', () => {
    const values1 = [5, 3, 8, 2, 4, 1, 7, 9, 6];
    const values2 = values1.map(x => x + 5);
    const expectedIntersection = (() => {
      const set1 = new Set(values1);
      const exp = values2.filter((v2)=>set1.has(v2));
      exp.sort();
      return exp;
    })();
    console.log(expectedIntersection);
    const tree1 = new Tree();
    for (let val of values1) {
      tree1.append(val);
    }
    const tree2 = new Tree();
    for (let val of values2) {
      tree2.append(val);
    }
    const intersection = treeIntersection(tree1, tree2);
    intersection.sort();
    expect(intersection).toEqual(expectedIntersection);
  });
});
