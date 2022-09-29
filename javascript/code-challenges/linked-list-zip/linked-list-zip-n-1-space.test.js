const {
  mergeLists,
  mergeSortedLists,
  listFromArray,
  arrayFromList,
} = require("./linked-list-zip-n-1-space");

describe("Linked List Zip", () => {
  test("it zips two lists into one", () => {
    const list1 = listFromArray([1, 2, 3, 4, 5]);
    const list2 = listFromArray([6, 7, 8, 9, 10]);
    const list = mergeLists(list1, list2);
    expect(arrayFromList(list)).toEqual([1, 6, 2, 7, 3, 8, 4, 9, 5, 10]);
  });
  test("it can zip two empty lists", () => {
    expect(mergeLists(null, null)).toBe(null);
  });
  test("it can combine two sorted lists", () => {
    const list1 = listFromArray([1, 2, 3, 45, 46, 67, 78, 100, 101, 1011]);
    const list2 = listFromArray([11, 22, 33, 44, 55, 66, 77, 88, 99, 1010]);
    const list3 = mergeSortedLists(list1, list2);
    expect(arrayFromList(list3)).toEqual([
      1, 2, 3, 11, 22, 33, 44, 45, 46, 55, 66, 67, 77, 78, 88, 99, 100, 101,
      1010, 1011,
    ]);
  });
});
