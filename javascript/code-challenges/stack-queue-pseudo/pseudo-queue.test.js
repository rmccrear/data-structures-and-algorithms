const PseudoQueue = require("./pseudo-queue");

describe("PseudoQueue", () => {
  test("it can enqueue data", () => {
    const queue = new PseudoQueue();
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });
  test("it can dequeue data", () => {
    const queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });
  test("it can show if it is empty or not", () => {
    const queue = new PseudoQueue();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
  });
  test("it can enqueue data", () => {
    const queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });
  test("peek and dequeue will throw if isEmpty", () => {
    const queue = new PseudoQueue();
    const peek = () => queue.peek();
    const dequeue = () => queue.dequeue();
    expect(peek).toThrow();
    expect(dequeue).toThrow();
  });
});
