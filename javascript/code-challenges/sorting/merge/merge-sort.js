'use strict';


const mergeSort = (arr) => {
  console.log(arr);
  let n = arr.length;
  if (n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    console.log('MERGE_TREE: left slice:  ', left, left.length === 1 ? '(LEAF)' : '');
    let right = arr.slice(mid);
    console.log('MERGE_TREE: right slice: ', right, right.length === 1 ? '(LEAF)' : '');
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
    // console.log(arr);
  }
};


const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  // while i is less than the length of left and right
  console.log("MERGE_STEP: L: ", left);
  console.log("            R: ", right);
  while (i < left.length && j < right.length) {
    console.log("MERGE_COMP: L: ", left[i], "R: ", right[j], `i=${i}, j=${j}`);

    // if the value of the left array at[i] is less than the value of the index of right array[j]
    if (left[i] < right[j]) {
      // assign the same index on our target array to the value of left[i]
      arr[k] = left[i];
      console.log('MERGE_COMP:    ', `(${left[i]} < ${right[j]})`, `is ${left[i] < right[j]}`, `--> insert ${arr[k]} into arr[${k}]`);
      i++;
    }
    // if we reach else, then right[j] is less than left[i]
    else {
      arr[k] = right[j];
      console.log('MERGE_COMP:    ', `(${left[i]} < ${right[j]})`, `is ${left[i] < right[j]}`, `--> insert ${arr[k]} into arr[${k}]`);
      j++;
    }
    console.log('MERGE_COMP: arr', arr);
    k++;
  }

  if (i < left.length) {
    while (i < left.length) {
      arr[k] = left[i];
      console.log('MERGE_OVER: push', arr[k]);
      i++;
      k++;
    }
  } else if (j < right.length) {
    while (j < right.length) {
      arr[k] = right[j];
      console.log('MERGE_OVER: push', arr[k]);
      j++;
      k++;
    }
  }
  console.log('MERGE_DONE: arr', arr);
};

module.exports = mergeSort;
