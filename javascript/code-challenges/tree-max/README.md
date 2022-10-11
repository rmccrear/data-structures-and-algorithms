# Challenge Summary
![JavaScript tests passing badge](https://github.com/rmccrear/data-structures-and-algorithms/actions/workflows/javascript-tests.yml/badge.svg)

Build a tree and search for the max value. The tree is not guaranteed to be a binary search tree.


## Approach & Efficiency

If we have tree, with nodes in any position, have to traverse the entire tree to find the max value. The efficiency will be O(n) because you must examine every node in the tree once.

## Implementation

We will implement a Tree class composed of Nodes. The tree class will have a `traverse` method. The `traverse` method will take a function that will check the value of the node and update MAX if the value is greater than MAX. The `findMax` method will use this.
