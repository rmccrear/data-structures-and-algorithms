# Stacks and Queues

Stacks are first in first out structures. We will build them from linked lists here.

Queues are first in last out structures. We will build them from linked lists.

## Challenge

The task is to implement stacks and queues in JavaScript.

## Approach & Efficiency

Stacks and queues should take up O(n) space to store data. The opperations of push/pop and enqueue/dequeue should take O(1) time and space to execute.

## API

    class Stack:
        push(n) // adds a value, n, to the stack
        pop()  // returns last added value and removes it.
        peek() // returns the last added value, but does not remove it.
        isEmpty() // boolean for if there are any items in the stack


    class Queue:
        enqueue(n) // adds a value, n, to the queue
        dequeue()  // returns next value (FILO) and removes it.
        peek() // returns the next value to be returned, but does not remove it.
        isEmpty() // boolean for if there are any items in the queue
