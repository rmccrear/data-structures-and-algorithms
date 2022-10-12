# Challenge Summary
Create a copy and modify a k-ary tree.

Given a k-ary tree, copy it then perform fizz-buzz on each node value of the tree.

## Whiteboard Process

Perform a depth-first traversal of the k-ary tree. At each point, examine the node and create a new node on the new tree. Create a child node on the new node if the node has children. execute the fizz-buzz function on the value to set as the value of the new node.

## Approach & Efficiency

The algorithm needs to traverse each node once, so it is O(n)
