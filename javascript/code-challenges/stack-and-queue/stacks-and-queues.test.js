const Stack = require("./stack");
const Queue = require("./queue");

describe("Stacks and Queues", () => {
  describe("Stack", () => {
    test("Can successfully instantiate an empty stack", () => {
      const stack = new Stack();
      expect(stack.top).toBeFalsy();
    });

    test("Can successfully push onto a stack", () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.top.value).toBe(1);
    });

    test("Can successfully push multiple values onto a stack", () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.top.value).toBe(1);
      stack.push(2);
      expect(stack.top.value).toBe(2);
      stack.push(3);
      expect(stack.top.value).toBe(3);
    });

    test("Can successfully pop off the stack", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toBe(3);
      expect(stack.top.value).toBe(2);
    });
    test("Can successfully empty a stack after multiple pops", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
      expect(stack.isEmpty()).toBe(true);
    });
    test("Can successfully peek the next item on the stack", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.peek()).toBe(3);
      expect(stack.top.value).toBe(3);
    });
    test("Calling pop or peek on empty stack raises exception", () => {
      const stack = new Stack();
      const popEmpty = () => stack.pop();
      expect(popEmpty).toThrow();
      const peekEmpty = () => stack.peek();
      expect(peekEmpty).toThrow();
    });
  });
  describe("Queue", () => {
    test("Can successfully instantiate an empty queue", () => {
      const queue = new Queue();
      expect(queue.front).toBeFalsy();
    });
    test("Can successfully enqueue into a queue", () => {
      const queue = new Queue();
      queue.enqueue(1);
      expect(queue.front.value).toBe(1);
    });
    test("Can successfully enqueue multiple values into a queue", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.front.value).toBe(1);
    });
    test("Can successfully dequeue out of a queue the expected value", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toBe(1);
    });
    test("Can successfully peek into a queue, seeing the expected value", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.peek()).toBe(1);
      expect(queue.peek()).toBe(1);
    });
    test("Can successfully empty a queue after multiple dequeues", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
      expect(queue.dequeue()).toBe(3);
      expect(queue.isEmpty()).toBe(true);
    });
    test("Calling dequeue or peek on empty queue raises exception", () => {
      const callFnOn = (fnName, obj) => () => obj[fnName]();
      const queue = new Queue();
      expect(callFnOn("dequeue", queue)).toThrow();
      expect(callFnOn("peek", queue)).toThrow();
    });
  });
});
