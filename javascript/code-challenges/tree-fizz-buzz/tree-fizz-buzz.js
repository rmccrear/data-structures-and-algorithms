/*
const { readWordsFromFile } = require("./read-words")

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

    clone() { 
        const tree2 = new Tree();
        const traverse = (node, node2) => { 
            for (let childKey in node.children) { 
                node2.children[childKey] = new Node(childKey)
                traverse(node.children[childKey], node2.children[childKey])
            }
        }
        traverse(this.root, tree2.root);
        return tree2;
    }

    cloneWithAlterKey(fn) { 
        const tree2 = new Tree();
        const traverse = (node, node2) => { 
            for (let childKey in node.children) { 
                const childKey2 = fn(childKey)
                if(! node2.children[childKey2]) // handle case where fn collapses childKey, ie. fn is not one-to-one
                    node2.children[childKey2] = new Node(childKey2)
                traverse(node.children[childKey], node2.children[childKey2])
            }
        }
        traverse(this.root, tree2.root);
        return tree2;
    }

}

module.exports = Tree