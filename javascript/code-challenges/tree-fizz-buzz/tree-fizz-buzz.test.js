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

    test('should copy a k-ary tree', () => {
        const tree = new Tree();
        const words = readWordsFromFile();
        for (word of words) {
            tree.addWord(word)
        }
        const tree2 = tree.clone()
        expect(tree2.checkString('question')).toBe(true);
        expect(tree2.checkString('also')).toBe(true);
        expect(tree2.checkString('different')).toBe(true);
        expect(tree2.checkString('differenttttt')).toBe(false);
    });
    
    test('should copy a k-ary tree and alter the keys', () => {
        const tree = new Tree();
        const words = readWordsFromFile();
        for (word of words) {
            tree.addWord(word)
        }
        const cap = (s) => s.toUpperCase()
        const tree2 = tree.cloneWithAlterKey(cap)
        expect(tree2.checkString('QUESTION')).toBe(true);
        expect(tree2.checkString('ALSO')).toBe(true);
        expect(tree2.checkString('DIFFERENT')).toBe(true);
        expect(tree2.checkString('DIFFERENTTTTT')).toBe(false);
    });

    test('should copy a k-ary tree and fizz-buzz the keys', () => {
        const tree = new Tree();
        const words = readWordsFromFile();
        for (word of words) {
            tree.addWord(word)
        }
        const toCharCode = (s) => s.charCodeAt(0)
        const fizzBuzz = (n) => { 
            if(n%3 && n%5) return 'FizzBuzz'
            else if (n%3) return 'Fizz'
            else if (n%5) return 'Buzz'
            else return "" + n
        }
        const treeNum = tree.cloneWithAlterKey(toCharCode)
        const question = (Array.from('question')).map(toCharCode)
        const also = (Array.from('also')).map(toCharCode)
        const different = (Array.from('different')).map(toCharCode)
        const differenttttt = (Array.from('differenttttt')).map(toCharCode)
        expect(treeNum.checkString(question)).toBe(true);
        expect(treeNum.checkString(also)).toBe(true);
        expect(treeNum.checkString(different)).toBe(true);
        expect(treeNum.checkString(differenttttt)).toBe(false);
        const questionFizz = question.map(fizzBuzz)
        const alsoFizz = also.map(fizzBuzz)
        const differentFizz = different.map(fizzBuzz)
        const differentttttFizz = differenttttt.map(fizzBuzz)
        const treeFizz = treeNum.cloneWithAlterKey(fizzBuzz)
        expect(treeFizz.checkString(questionFizz)).toBe(true);
        expect(treeFizz.checkString(alsoFizz)).toBe(true);
        expect(treeFizz.checkString(differentFizz)).toBe(true);
        expect(treeFizz.checkString(differentttttFizz)).toBe(false);
    });
});