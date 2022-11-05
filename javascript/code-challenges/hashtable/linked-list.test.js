const LinkedList = require('./linked-list');

// Note: we are using arrays of key-value pairs to test 
// the list, since the list will be used to store key-value 
// pairs in the hashtable
describe('LinkedList for Hashtable', () => {
  test('should unshift and find items', () => {
    const list = new LinkedList();
    list.unshift(['A', 1]);
    list.unshift(['B', 2]);
    list.unshift(['C', 3]);

    // eslint-disable-next-line no-unused-vars
    const finder = (findKey) => ([ key, value ]) => key === findKey;
    const item = list.find(finder('A'));
    expect(item).toEqual(['A', 1]);
  });

  test('should iterate over items', () => {
    const list = new LinkedList();
    const testItems = [
      ['A', 1],
      ['B', 2],
      ['C', 3],
    ];

    for (let i of testItems) {
      list.unshift(i);
    }

    const items = list.items();
    let i = testItems.length;
    for (let item of items) {
      expect(item).toEqual(testItems[i-1]);
      i--;
    }
  });

  test('should delete an item in the middle', () => {
    const list = new LinkedList();
    const testItems = [
      ['A', 1],
      ['B', 2],
      ['C', 3],
    ];
    const expectedItems = [
      ['A', 1],
      ['C', 3],
    ];
    for (let i of testItems) {
      list.unshift(i);
    }
    // eslint-disable-next-line no-unused-vars
    list.remove(([key, value]) => key === 'B');
    const items = list.items();
    let i = expectedItems.length;
    for (let item of items) {
      expect(item).toEqual(expectedItems[i - 1]);
      i--;
    }
  });

  test('should delete an item at the start', () => {
    const list = new LinkedList();
    const testItems = [
      ['A', 1],
      ['B', 2],
      ['C', 3],
    ];
    const expectedItems = [
      ['B', 2],
      ['C', 3],
    ];
    for (let i of testItems) {
      list.unshift(i);
    }
    // eslint-disable-next-line no-unused-vars
    list.remove(([key, value]) => key === 'A');
    const items = list.items();
    let i = expectedItems.length;
    for (let item of items) {
      expect(item).toEqual(expectedItems[i - 1]);
      i--;
    }
  });

  test('should delete an item at the end', () => {
    const list = new LinkedList();
    const testItems = [
      ['A', 1],
      ['B', 2],
      ['C', 3],
    ];
    const expectedItems = [
      ['A', 1],
      ['B', 2],
    ];
    for (let i of testItems) {
      list.unshift(i);
    }
    // eslint-disable-next-line no-unused-vars
    list.remove(([key, value]) => key === 'C');
    const items = list.items();
    let i = expectedItems.length;
    for (let item of items) {
      expect(item).toEqual(expectedItems[i - 1]);
      i--;
    }
  });

  test('should update an item', () => {
    const list = new LinkedList();
    const testItems = [
      ['A', 1],
      ['B', 2],
      ['C', 3],
    ];
    const expectedItems = [
      ['A', 1],
      ['B', 5],
      ['C', 3],
    ];
    for (let i of testItems) {
      list.unshift(i);
    }
    // eslint-disable-next-line no-unused-vars
    list.replace(([key, value]) => key === 'B', ['B', 5]);
    const items = list.items();
    let i = expectedItems.length;
    for (let item of items) {
      expect(item).toEqual(expectedItems[i - 1]);
      i--;
    }
  });
});
