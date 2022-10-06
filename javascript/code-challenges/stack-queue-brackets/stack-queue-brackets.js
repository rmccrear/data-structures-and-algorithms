const Stack = require("./stack");
const Queue = require("./queue");

class BracketChecker {
  check(str) {
    return checkBrackets(str);
  }
}

const pair = {
  "}": "{",
  "]": "[",
  ")": "(",
};

function checkBrackets(str) {
  const stack = new Stack();
  const queue = new Queue();

  for (let char of str) {
    queue.enqueue(char);
  }
  while (!queue.isEmpty()) {
    const char = queue.dequeue();
    if ("[{(".indexOf(char) != -1) {
      stack.push(char);
    }
    if (")}]".indexOf(char) != -1) {
      if (stack.isEmpty()) return false;

      if (!(stack.peek() === pair[char])) return false;
      else {
        stack.pop();
      }
    }
  }

  if (!stack.isEmpty()) return false;
  else return true;
}

module.exports = BracketChecker;
