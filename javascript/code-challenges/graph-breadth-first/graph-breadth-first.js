const Graph = require('../graph/graph');

class GraphWithTraversal extends Graph {
  breadthFirstTraversal(node, fn) {
    const q = [node];
    const visited = {};
    while (q.length > 0) {
      const node = q.pop();
      fn(node.value);
      visited[node.value] = true;
      const neighbors = this.getNeighbors(node);
      for (let n of neighbors) {
        if (!(n.value in visited)) {
          visited[n.value] = true;
          q.unshift(n);
        }
      }
    }
  }
}


module.exports = GraphWithTraversal;
