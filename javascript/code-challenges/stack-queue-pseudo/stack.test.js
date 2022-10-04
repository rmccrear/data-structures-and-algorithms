const { testElement } = require("domutils");
const Stack = require("./stack");

describe("Stack", () => {
  test("can push", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });
  test("can pop", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });
  test("can be empty and isEmpty()===true", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
  });
  test("can push", () => {});
});
