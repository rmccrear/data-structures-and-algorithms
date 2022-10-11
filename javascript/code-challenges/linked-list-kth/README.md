# Linked List Kth element from rear.

## Problem

Given a linked list, find the value of the k to the last node.

## Example

Given:
 1      2      3      4      5
[A] -> [B] -> [C] -> [D] -> [E] -> NULL

Find the 3rd from the rear.

Result: C

## Solutions

### Solution 1

* Traverse through the list and count how many are in the list.
* Subtract k from length.
* Traverse length-k items through the list and return the value.o

The running time is O(2n) becuase you traverse the list twice, or O(n)

### Solution 2

* Use two pointers, node and backNode.
* Set node to head;
* Set n=1 to use as a counter
* Iterate forward through the list, using n as a counter to count the nodes you pass over.  That is while node is not NULL, set node to node.next and increment n.
* When n=k, set backNode to head.
* When n>k, set backNode to backNode.next
* When node is Null, stop. 
* Return the value of backNode.

Find the 3rd from the rear.
Step 1 n=1, k=3
node
 1      2      3      4      5
[A] -> [B] -> [C] -> [D] -> [E] -> NULL

Step 2
Step 1 n=2, k=3
       node
 1      2      3      4      5
[A] -> [B] -> [C] -> [D] -> [E] -> NULL

Step 3
Step 1 n=3, k=3
backNode      node
 1      2      3      4      5
[A] -> [B] -> [C] -> [D] -> [E] -> NULL


Step 4
Step 1 n=4, k=3
     backNode       node
 1      2      3      4      5
[A] -> [B] -> [C] -> [D] -> [E] -> NULL

Step 4
Step 1 n=4, k=3
     backNode       node
 1      2      3      4      5
[A] -> [B] -> [C] -> [D] -> [E] -> NULL


Step 4
Step 1 n=5, k=3
             backNode       node
 1      2      3      4      5
[A] -> [B] -> [C] -> [D] -> [E] -> NULL

Step 5
Step 1 n=5, k=3
             backNode              node   STOP
 1      2      3      4      5
[A] -> [B] -> [C] -> [D] -> [E] -> NULL

This is still O(2n) because you have two operations for each iteration of your loop. So the running time is O(n) as well.

## Unit Tests

- Where k is greater than the length of the linked list # Returns Head
- Where k and the length of the list are the same # Returns Head
- Where k is not a positive integer # Returns Tail
- Where the linked list is of a size 1 # Returns Head
- “Happy Path” where k is not at the end, but somewhere in the middle of the linked list # returns kth element from rear.
