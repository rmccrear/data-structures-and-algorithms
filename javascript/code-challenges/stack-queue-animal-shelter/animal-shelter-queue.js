const Queue = require("./queue");
const Stack = require("./stack");

class Animal {
  constructor(opts) {
    const { kind } = opts;
    if (kind) this.kind = kind;
    else {
      throw new Error("Kind of animal not specified");
    }
    this.name = opts.name;
    this.emoji = opts.emoji;
  }
}

class PreferenceQueue {
  constructor() {
    this.queue = new Queue();
    this.stack = new Stack();
  }

  enqueue(animalOpts) {
    const item = new Animal(animalOpts);
    this.queue.enqueue(item);
  }
  dequeue(preferenceFn) {
    let value = null;
    while (!value && !this.queue.isEmpty()) {
      const next = this.queue.pop();
      const prefFullfilled = preferenceFn(next); //?
      if (!preferenceFn(next)) this.stack.push(next);
      else {
        value = next;
      }
    }
    while (!this.stack.isEmpty()) {
      this.queue.push(this.stack.pop());
    }
    return value;
  }
  isEmpty() {
    return this.queue.isEmpty();
  }
}

function preferKind(animal, kind) {
  if (animal.kind === kind) return true;
  else return false;
}

const preferDogs = (animal) => preferKind(animal, "dog");
const preferCats = (animal) => preferKind(animal, "cat");

module.exports = {
  PreferenceQueue,
  Animal,
  preferDogs,
  preferCats,
  preferKind,
};
