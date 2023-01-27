const Stack = require("./stack");
const Queue = require("./queue");

class Animal {
  constructor(opts) {
    this.kind = opts.kind;
    this.name = opts.name;
    this.emoji = opts.emoji;
    if(!opts.kind) throw new Error("Animal must have a kind"); 
  }
}

class PreferenceQueue {
  constructor() {
    this.frontStack = new Stack();
    this.backStack = new Stack();
    this.tempStack = new Stack();
  }

  enqueue(animal) {
    this.backStack.push(animal);
  }

  dequeue(preferenceFn) {
    let value = null;
    while(value === null && (!this.frontStack.isEmpty() || !this.backStack.isEmpty())) {
      if(!this.frontStack.isEmpty()) {
        const animal = this.frontStack.pop();
        if(preferenceFn(animal)) {
          value = animal;
        } else {
          this.tempStack.push(animal);
        }
      } else if(!this.backStack.isEmpty()) {
        while(!this.backStack.isEmpty()) {
          this.frontStack.push(this.backStack.pop());
        }
      }
    }
    while(!this.tempStack.isEmpty()) {
      this.frontStack.push(this.tempStack.pop());
    }
    return value;
  }

  isEmpty() {
    return this.frontStack.isEmpty() && this.backStack.isEmpty();
  }
}

function preferKind (kind) {
  return function (animal) {
    return animal.kind === kind;
  };
}

const preferCats = preferKind("cat");
const preferDogs = preferKind("dog");

module.exports = {
  Animal,
  PreferenceQueue,
  preferCats,
  preferDogs,
  preferKind
};
