const { Hashtable } = require('./hashtable');

describe('Hashtable', () => {

  test('should instantiate a hashtable', () => {
    const hash = new Hashtable();
    expect(hash).toBeTruthy();
  });

  test('should set/get an element into the hash table', () => {
    const hash = new Hashtable();
    const key = 'elephant';
    const value = {name: 'Elly'};
    hash.set(key, value);
    expect(hash.get('elephant')).toEqual(value);
  });
  
  test('should set/get several similar element into the hash table', () => {
    const hash = new Hashtable();
    hash.set('elephant', {name: 'Elly'});
    hash.set('elephants', [{name: 'Elly'}, {name: 'Ella'}]);
    hash.set('eagle', {name: 'Eagle Eye'});
    hash.set('eel', {name: 'Electra'});
    hash.set('aardvark', {name: 'Arthur'});
    hash.set('ant', {name: 'Betsy'})
    expect(hash.get('eel')).toEqual({name: 'Electra'});
    expect(hash.get('ant')).toEqual({name: 'Betsy'});
  });

});
