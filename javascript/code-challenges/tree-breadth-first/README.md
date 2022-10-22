# Challenge

Breadth first traversal of a tree.

## Idea Implementation

While a depth first traversal of a tree can rely on the call stack to maintain the nodes to be traversed, a breadth first traversal requires a queue. 

The idea of the algorithm is to put each node onto a queue when it is encountered. Then, it will be dequeued and examined, and its children will be put on the queue. The children of the earlier nodes will be examined before the children of those children, and so on.

## Example

Suppose we had the following graph.

```mermaid
    graph TB;

    5-->3
    5-->7
    3-->2
    3-->4
    7-->6
    7-->9
```

We need a queue, Q, and something to keep track of the traversal, say a queue R.

```mermaid LR
    graph LR
    Q[Q BACK] --> QF[FRONT]
    R[R BACK] --> RF[FRONT]
```


First, put 5 on Q. Then, take one off Q. That will be 5, itself since Q is of length 1 at this point. Then put the children of 5, on Q. The Q will look like this:

```mermaid LR
    graph LR
    Q[Q BACK] --> 7 --> 3 --> QF[FRONT]
    R[R BACK] --> 5 --> RF[FRONT]
```

Now, take off 3, and put the children of 3 on Q.

```mermaid LR
    graph LR
    Q[Q BACK] --> 4 --> 2 --> 7 -->  QF[FRONT]
    R[R BACK] --> 3 --> 5 --> RF[FRONT]
```

Now, 7.

```mermaid LR
    graph LR
    Q[Q BACK] --> 9 --> 6 --> 4 --> 2 -->  QF[FRONT]
    R[R BACK] --> 7 --> 3 --> 5 --> RF[FRONT]
```

There are no more children, so there will be no more additions to Q. Let's finish by putting all the nodes from Q onto R.

```mermaid LR
    graph LR
    Q[Q BACK] --> QF[FRONT]
    R[R BACK] --> 9 --> 6 --> 4 --> 2 --> 7 --> 3 --> 5 --> RF[FRONT]
```

This is a breadth first traversal of the tree.



