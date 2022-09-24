"use strict";

class Node {
  next = null;
  constructor(val) {
    this.payload = val;
  }
  toString() {
    return `{ ${this.payload} }`;
  }
}

class LinkedList {
  head = null;
  insert(val) {
    if (this.head === null) {
      this.head = new Node(val);
    } else {
      let last = this.head;
      while (last.next !== null) {
        last = last.next;
      }
      last.next = new Node(val);
    }
  }
  includes(val) {
    this.head;
    if (this.head === null) {
      return false;
    } else {
      let node = this.head;
      while (node.payload !== val && node.next !== null) {
        node = node.next;
      }
      if (node.payload === val) {
        return true;
      } else {
        return false;
      }
    }
  }
  toString() {
    let node = this.head;
    let str = this.head ? this.head.toString() + " -> " : "";
    while (node.next) {
      node = node.next;
      str = str + node.toString() + " -> ";
    }
    str = str + "NULL";
    return str;
  }

  [Symbol.iterator]() {
    let current = this.head;
    return {
      next() {
        if (current !== null) {
          const value = current.payload;
          const done = false;
          current = current.next;
          return { done, value };
        } else {
          return { done: true, value: undefined };
        }
      },
      return() {
        return { done: true };
      },
    };
  }
}

module.exports = LinkedList;
