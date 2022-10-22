"use strict";

const LinkedList = require("../index");
// Require our linked list implementation
const LinkedLilst = require("../index");

describe("Linked List", () => {
  it("works", () => {
    expect(true).toBeTruthy();
  });
  it("creates a linked list using insert()", () => {
    const list = new LinkedList();
    list.insert("A");
    list.insert("B");
    list.insert("C");
    list.insert("D");
    expect(list.head.payload).toBe("A");
    expect(list.head.next.payload).toBe("B");
    expect(list.head.next.next.payload).toBe("C");
    expect(list.head.next.next.next.payload).toBe("D");
  });
  it("finds an element with include()", () => {
    const list = new LinkedList();
    list.insert("A");
    list.insert("B");
    list.insert("C");
    list.insert("D");
    expect(list.includes("C")).toBe(true);
  });
  it("include() returns false if not found", () => {
    const list = new LinkedList();
    expect(list.includes("A")).toBe(false);
    list.insert("A");
    list.insert("B");
    list.insert("C");
    list.insert("D");
    expect(list.includes("E")).toBe(false);
  });
  it("converts list to a string representation", () => {
    const list = new LinkedList();
    list.insert("A");
    list.insert("B");
    list.insert("C");
    list.insert("D");
    const str = list.toString();
    expect(str).toBe("{ A } -> { B } -> { C } -> { D } -> NULL");
  });
  it("returns a collection of all the elements in the list", () => {
    const list = new LinkedList();
    list.insert("A");
    list.insert("B");
    list.insert("C");
    list.insert("D");
    const arr = Array.from(list);
    expect(arr).toEqual(["A", "B", "C", "D"]);
  });
});
