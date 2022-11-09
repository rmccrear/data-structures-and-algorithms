const Graph = require('../graph/graph');

class GraphWithPathCalc extends Graph {
  costOfPath(path) {
    let sum = 0;
    for (let i = 0; i < path.length-1; i++) {
      let hasDirectEdge = false;
      const edges = this.getEdges(path[i]);
      for (let e of edges) {
        if (e.vertex === path[i + 1]) {
          sum += e.weight;
          hasDirectEdge = true;
        }
      }
      if (!hasDirectEdge) {
        return null;
      }
    }
    return sum;
  }

}

module.exports = GraphWithPathCalc;
