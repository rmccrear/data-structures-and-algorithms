# Tree Intersection

The challenge is to find which values are shared by two trees. For example, if one tree has the values [1,2,3,4,5] and another has the values [1,9,8,7,6,5], then the intersection is [1,5].

## Idea

The idea of the algorithm is to traverse through the nodes of each tree and compare them. We can use a hash table to keep track of what values are in one tree, then check the other.

## Implementation

We will need a hash table, a list and the two trees which we are comparing.

First we will traverse tree 1 and enter all the values into the hash table as keys.

Then we will traverse tree 2 and check whether or not the values exist in the hash table. If so, we can put the value into the list.

## Algorithmic Cost

The time complexity of traversing the two trees is n, where n is the number of nodes in both trees. The cost for looking up values in the hash table is O(1), and we will do this about n times. So the time complexity is O(n).
