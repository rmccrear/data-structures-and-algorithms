const { Hashtable } = require('../hashtable/hashtable');

const treeIntersection = (tree1, tree2) => {
  const h = new Hashtable();
  const repeatedValues = [];
  const recordValue = (value) => {
    if (!h.has(value)) {
      h.set(value, 1);
    }
  };

  const checkForRepeated = (value) => {
    const count = h.get(value);
    if (count === 1) {
      repeatedValues.push(value);
      h.set(value, 2);
    }
  };

  tree1.inOrderTraversal(recordValue);
  tree2.inOrderTraversal(checkForRepeated);

  return repeatedValues;


};

module.exports = { treeIntersection };