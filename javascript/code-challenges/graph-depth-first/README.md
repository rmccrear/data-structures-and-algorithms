# Depth First Traversal

A depth first traversal of a graph is a traversal that visits each node in the graph and follows a path to its end before branching out. In contrast to a breadth first traversal which branches out first before following the path to its end.

## Idea

Start at the 
starting node. Put the starting node
on a stack. While the stack is not empty,
pop from the stack, process the 
node, and put all the  neighbors of the 
node onto the stack.
Keep track of visited nodes. If a node
has been visited, don't push it on the
stack.

## Algorithmic Complexity

The time complexity is O(N*E) where 
N is the number of nodes and E
is the number of edges. This is 
because you must visit each node
once, and you must check each
edge of each node once.
Since you much check all of each 
node's edges, that is the equivalent
of saying you must check each edge.
The space complexity for the stack
is at worst O(N-1) in the case where 
all the nodes have an edge directed
 to them from the first node. 
 In this case, after the first node
is popped from the stack, all the other 
nodes are pushed onto the stack. For 
the visited nodes hash, it will be N,
and for the return value it will be N as
well. So the space complexity is O(N)


## Diagram

This diagram shows the white-board process of discussing the depth first traversal.

Note that this is not deterministic.
The final list depends on what order
the neighbors are pushed onto the
stack.

![Depth first traversal diagram][diagram]

[diagram]: docs/images/depth-first-tree.png
