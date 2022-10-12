const Tree = require("./tree-fizz-buzz");
const { readWordsFromFile } = require("./read-words")


describe('Fizz Buzz Tree', () => {
    test('should create a k-ary tree', () => {
        const tree = new Tree();
        tree.addWord('dog')
        tree.addWord('cat')
        tree.addWord('cate')
        tree.addWord('dug')
        tree.addWord('dood')
        tree.addWord('dude')
        expect(tree.checkString('dog')).toBe(true);
        expect(tree.checkString('doog')).toBe(false);
    });
    test('should create a k-ary tree from the wordlist', () => {
        const tree = new Tree();
        const words = readWordsFromFile();
        for (word of words) {
            tree.addWord(word)
        }
        expect(tree.checkString('question')).toBe(true);
        expect(tree.checkString('also')).toBe(true);
        expect(tree.checkString('different')).toBe(true);
        expect(tree.checkString('differenttttt')).toBe(false);
    });
    
});