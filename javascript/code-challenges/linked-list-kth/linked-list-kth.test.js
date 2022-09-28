const LinkedList = require("./linked-list-kth");

describe("Linked List Kth", () => {
  test("It finds the kth element from the end of a linked list", () => {
    const list = new LinkedList();
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((i) => list.append(i));
    const kthFromRear = list.kthFromRear(4);
    expect(kthFromRear).toBe(7);
  });
  test("k and the length of the list are the same ", () => {
    const list = new LinkedList();
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((i) => list.append(i));
    const kthFromRear = list.kthFromRear(10);
    expect(kthFromRear).toBe(1);
  });
  test("k is greater than the lenght of the list", () => {
    const list = new LinkedList();
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((i) => list.append(i));
    const kthFromRear = list.kthFromRear(11);
    expect(kthFromRear).toBe(1);
  });
  test("k is -1", () => {
    const list = new LinkedList();
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((i) => list.append(i));
    const kthFromRear = list.kthFromRear(-1);
    expect(kthFromRear).toBe(10);
  });
  test("list is length 1", () => {
    const list = new LinkedList();
    [1].forEach((i) => list.append(i));
    const kthFromRear = list.kthFromRear(1);
    expect(kthFromRear).toBe(1);
  });
});
