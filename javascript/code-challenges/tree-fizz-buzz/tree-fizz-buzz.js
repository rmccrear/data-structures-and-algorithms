const { readWordsFromFile } = require("./read-words")

/*
const words = readWordsFromFile();
for (word of words) {
    console.log(word)
}
*/

class Node { 
    constructor(x) { 
        this.value = x
        this.children = {}
    }
}

class Tree { 

    constructor() { 
        this.root = { children: {} }
    }

    addWord(word) { 
        let node = this.root;
        for (let letter of word) { 
            if (!node.children[letter]) { 
                node.children[letter] = new Node(letter)
            }
            node = node.children[letter]
        }
    }

    addWordList(wordList) { 
        for (let word of wordList) { 
            this.addWord(word)
        }
    }

    checkString(trialWord) { 
        let node = this.root;
        for (let letter of trialWord) { 
            if (!node.children[letter]) { 
                return false;
            }
            node = node.children[letter]
        }
        return true;
    }

}

module.exports = Tree