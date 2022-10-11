const LinkedList = require("./linked-list-insertions");

describe("Linked List", () => {
  test("It can append a node", () => {
    const list = new LinkedList();
    list.append("n");
    expect(list.head.payload).toBe("n");
    list.append("m");
    expect(list.head.next.payload).toBe("m");
  });

  test("It can append mulitple nodes", () => {
    const list = new LinkedList();
    list.append("l");
    list.append("m");
    list.append("n");
    list.append("o");

    expect(list.head.payload).toBe("l");
    expect(list.head.next.payload).toBe("m");
    expect(list.head.next.next.payload).toBe("n");
    expect(list.head.next.next.next.payload).toBe("o");
  });

  test("It can insert a node before a middle node", () => {
    const list = new LinkedList();
    list.append("l");
    list.append("m");
    list.append("n");
    list.append("o");

    list.insertBefore("n", "z");

    expect(list.head.payload).toBe("l");
    expect(list.head.next.payload).toBe("m");
    expect(list.head.next.next.payload).toBe("z");
    expect(list.head.next.next.next.payload).toBe("n");
    expect(list.head.next.next.next.next.payload).toBe("o");
  });

  test("It can insert a node after a middle node", () => {
    const list = new LinkedList();
    list.append("l");
    list.append("m");
    list.append("n");
    list.append("o");

    list.insertAfter("n", "z");

    expect(list.head.payload).toBe("l");
    expect(list.head.next.payload).toBe("m");
    expect(list.head.next.next.payload).toBe("n");
    expect(list.head.next.next.next.payload).toBe("z");
    expect(list.head.next.next.next.next.payload).toBe("o");
  });

  test("It can insert a node before the head", () => {
    const list = new LinkedList();
    list.append("l");
    list.append("m");
    list.append("n");
    list.append("o");

    list.insertBefore("l", "z");

    expect(list.head.payload).toBe("z");
    expect(list.head.next.payload).toBe("l");
    expect(list.head.next.next.payload).toBe("m");
    expect(list.head.next.next.next.payload).toBe("n");
    expect(list.head.next.next.next.next.payload).toBe("o");
  });

  test("It can insert a node after the last node", () => {
    const list = new LinkedList();
    list.append("l");
    list.append("m");
    list.append("n");
    list.append("o");

    list.insertAfter("o", "z");

    expect(list.head.payload).toBe("l");
    expect(list.head.next.payload).toBe("m");
    expect(list.head.next.next.payload).toBe("n");
    expect(list.head.next.next.next.payload).toBe("o");
    expect(list.head.next.next.next.next.payload).toBe("z");
  });
});
