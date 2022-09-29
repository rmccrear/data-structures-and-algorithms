const LinkedList = require("./linked-list-zip");

describe("Linked List Zip", () => {
  test("it creates a linked list", () => {
    const list = new LinkedList();
    list.appendArrayValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(3);
  });
  test("it zips in a given list", () => {
    const list1 = new LinkedList();
    list1.appendArrayValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const list2 = new LinkedList();
    list2.appendArrayValues([11, 22, 33, 44, 55, 66, 77, 88, 99, 1010]);
    const list3 = list1.zipWithList(list2);
    expect(list3.toArray()).toEqual([
      1, 11, 2, 22, 3, 33, 4, 44, 5, 55, 6, 66, 7, 77, 8, 88, 9, 99, 10, 1010,
    ]);
  });
  test("it can zip with an empty list", () => {
    const list1 = new LinkedList();
    list1.appendArrayValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const list2 = new LinkedList();
    const list3 = list1.zipWithList(list2);
    expect(list3.toArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test("it can zip into an empty list", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list2.appendArrayValues([11, 22, 33, 44, 55, 66, 77, 88, 99, 1010]);
    const list3 = list1.zipWithList(list2);
    expect(list3.toArray()).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99, 1010]);
  });
});
