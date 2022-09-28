const LinkedList = require("./linked-list-kth");

describe("Linked List Kth", () => {
  test("It finds the kth element from the end of a linked list", () => {
    const list = new LinkedList();
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((i) => list.append(i));
    const kthFromRear = list.kthFromRear(4);
    expect(kthFromRear).toBe(7);
  });
});
