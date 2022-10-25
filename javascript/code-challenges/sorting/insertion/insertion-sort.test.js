const sort = require('./insertion-sort');
describe('Insertion sort', () => {
  test('should sort a list of size 2', () => {
    const arr = [8, 4];
    sort(arr);
    expect(arr).toEqual([4, 8])
  });
  test('should sort a list', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    sort(arr);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42])
  });
  test('should sort a reverse sorted list', () => {
    const arr = [20, 18, 12, 8, 5, -2];
    sort(arr);
    expect(arr).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  test('should sort a list with duplicates', () => {
    const arr = [5, 12, 7, 5, 5, 7];
    sort(arr);
    expect(arr).toEqual([5, 5, 5, 7, 7, 12]);
  });
  test('should sort a nearly sorted list', () => {
    const arr = [2, 3, 5, 7, 13, 11];
    sort(arr);
    expect(arr).toEqual([2, 3, 5, 7, 11, 13]);
  });

});
