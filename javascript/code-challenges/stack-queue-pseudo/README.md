# Challenge Summary

A queue can be implemented with two stacks. Although it is not very effcient, it is an interesting exersize.

## Whiteboard Process

Imagine this stack with A at the top.

```mermaid
    graph LR
    TOP-->A-->B-->C-->D-->E-->NULL
```

And this empty stack.

```mermaid
    graph LR
    TOP-->NULL
```

Let's say we want to add Z to the end of the stack.

```mermaid
    graph LR
    Z
```

First we pop from one stack, then push to the other for all items in the stack. (This will obviously take O(n) time.)

```mermaid
    graph LR
    TOP-->NULL
```

```mermaid
    graph LR
    TOP-->E-->D-->C-->B-->A-->NULL
```

Then we push Z onto the first, now empty stack.

```mermaid
    graph LR
    TOP-->Z-->NULL
```

```mermaid
    graph LR
    TOP-->E-->D-->C-->B-->A-->NULL
```

Then we pop, then push each item back onto the first stack.

```mermaid
    graph LR
    TOP-->A-->B-->C-->D-->E-->Z-->NULL
```

```mermaid
    graph LR
    TOP-->NULL
```

This will take O(n) time, also.

So the total time taken will be O(2n) ~= O(n)

<!-- Embedded whiteboard image -->

## Approach & Efficiency

## Solution

<!-- Show how to run your code, and examples of it in action -->
