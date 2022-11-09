# Graph path cost calculator

We are tasked with calculating the cost of a series of flights given in the diagram below. We will be also be given the list of cities on the itinerary. If there is no direct link between cities, we will return null.

The method for solving this problem is to calculate the cost of the path in a weighted graph.

![diagram of example graph](./graph-business-trip-example.png)

## Example

If we are given the path B-->C-->D then we will start at B, find the cost of the edge BC, then go to be and add the cost of the edge CD.

| edgeFrom | edgeTo | cost | sum |
| -------- | ------ | ---- | --- |
| B        | C      | 42   | 42  |
| C        | D      | 73   | 115 |

And the answer is $115.

## Complexity

We must traverse each node, p, in the path. So that will cost |P|. For each p, we must check all the edges to see if there is a link to the next vertex in the path. At worst, that will be the maximum number of edges for the graph, which is |N|-1. Since we must do this |P| times, the cost is O(|P|\*(|N|-1)).
