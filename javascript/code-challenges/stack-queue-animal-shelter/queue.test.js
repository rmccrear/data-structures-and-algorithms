const Queue = require("./queue");

describe("Queue", () => {
  test("should enqueue and peek", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });
  test("should enqueue and dequeue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
  });
  test("should push and pop", () => {
    const queue = new Queue();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.pop()).toBe(3);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(1);
    expect(queue.isEmpty()).toBe(true);
    queue.push(3);
    queue.push(2);
    queue.push(1);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
  });
  test("should enqueue and dequeue and push and pop", () => {
    const queue = new Queue();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
  });
});
