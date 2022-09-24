# Linked List

A simple linked list implementation.

# Discussion

Linked lists. Why?

When we insert a number into an array, we have a problem. There is already a number at that index. We have to move that number first. If we don't want to change the ordering of the array, we have to shift every single number up on index. Then we have a place to put our new one. This is inconvenient.

[100, 47, 90, 8, 20, 4] <-- (Insert 5 in between 90 and 8)

First we need to shift the numbers to make a position available.

[100, 47, 90, __ , 8, 20, 4] (Move each number over, one by one.)

Then we can put it in 5

[100, 47, 90, 5, 8, 20, 4]

 

Linked lists. What? How?

A linked list is different. The numbers in out linked list don't have an index. They are a collection of nodes. Maybe we have these nodes.

a=Node(100); b=Node(47); c=Node(90) d=Node(8); e=Node(20); f=Node(4);

Each node has a number as a payload, but no index. Each node also has next door neighbor.

We can put them in order by giving each node a neighbor.

a.next=b; b.next=c; c.next=d; e.next=f;

So, now I can get all the nodes like this:

thisNode=a;

while(thisNode.next !== null) { console.log(thisNode.payload); thisNode = thisNode.next }

 

Now I can put 5 between 90 and 8 like this.

newNode = Node(5);

newNode.next = d;

c.next = newNode;

And I don't have to shift all the numbers over one at a time!
