const LinkedList = require("./linked-list-zip");

describe("Linked List Zip", () => {
  test("it creates a linked list", () => {
    const list = new LinkedList();
    list.appendArrayValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(3);
    list.appendArrayValues([11, 12, 13]);
    expect(list.toArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
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
  test("it can zip two empty lists", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const list3 = list1.zipWithList(list2);
    expect(list3.head).toBeFalsy();
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
  test("it can combine two sorted lists", () => {
    const list1 = new LinkedList();
    list1.appendArrayValues([1, 2, 3, 45, 46, 67, 78, 100, 101, 1011]);
    const list2 = new LinkedList();
    list2.appendArrayValues([11, 22, 33, 44, 55, 66, 77, 88, 99, 1010]);
    const list3 = list1.combineSortedLists(list2);
    expect(list3.toArray()).toEqual([
      1, 2, 3, 11, 22, 33, 44, 45, 46, 55, 66, 67, 77, 78, 88, 99, 100, 101,
      1010, 1011,
    ]);
  });
  test("it can combine empty lists", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const list3 = list1.combineSortedLists(list2);
    expect(list3.toArray()).toEqual([]);

    const list4 = new LinkedList();
    list4.appendArrayValues([1, 2, 3]);
    const list5 = list4.combineSortedLists(new LinkedList());
    expect(list5.toArray()).toEqual([1, 2, 3]);

    const list6 = new LinkedList();
    const list7 = new LinkedList();
    list7.appendArrayValues([4, 5, 6]);
    const list8 = list6.combineSortedLists(list7);
    expect(list8.toArray()).toEqual([4, 5, 6]);
  });
});
