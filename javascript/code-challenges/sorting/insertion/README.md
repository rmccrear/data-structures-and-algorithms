# Insertion Sort

## Overview

Insertion sort is an algorithm that creates a growing sorted array. The sorted array grows from the start to the end of the array, one by one.
Since you know that the start of the array is sorted, you can find the place to insert the next higher index of in the array (which not sorted) into the lower part of the array (which is sorted). The sorted part grows by one each iteration until the whole array is sorted.

The code looks like this:

    const insertionSort = (arr) => {
      for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        const temp = arr[j + 1];
        while (j >= 0 && arr[j] > temp) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = temp;
      }
    }

Lets make a table of what the array looks like at each step.

    [8, 4, 23, 42, 16, 15];

| Step | i | j | temp | arr[j] | array|
| ---- |---|---|------|--------|------|
| 1    | 1 | 0 |   8  |    4   | [4, 8, 23, 42, 16, 15]|

After going through step 1, we see that 8 and 4 have switched places. The first two items in the array are sorted.


| Step | i | j | temp | arr[j] | array|
| ---- |---|---|------|--------|------|
| 1    | 1 | 0 |   8  |    4   | [4, 8, 23, 42, 16, 15]|
| 2    |2  | 1 |   23 |    8   |  [4, 8, 23, 42, 16, 15]|   

In step 2, temp > arr[j], so we make no changes.

| Step | i | j | temp | arr[j] | array|
| ---- |---|---|------|--------|------|
| 1    | 1 | 0 |   8  |    4   | [4, 8, 23, 42, 16, 15]|
| 2    |2  | 1 |   23 |    8   |  [4, 8, 23, 42, 16, 15]|   
| 3    |3  | 2 | 42   |   23   |   [4, 8, 23, 42, 16, 15]|   

Again, in step 3, temp > arr[j], so we make no changes.

| Step | i | j | temp | arr[j] | array|
| ---- |---|---|------|--------|------|
| 3    |3  | 2 | 42   |   23   |   [4, 8, 23, 42, 16, 15]|   
| 4    |4  | 3 | 16   |   42   |    [4, 8, 23, 42, 42, 15]|   
| 5    |4  | 2 | 16   |   23   |    [4, 8, 23, 23, 42, 15]|   
| 6    |4  | 1 | 16   |   23   |    [4, 8, 16, 23, 42, 15]|   

In step 4, (j=3) temp < arr[j] so we move arr[j] up one.

In step 5, (j=2) temp < arr[j] so we move arr[j] up one, also.

In step 6, (j=1) temp > arr[j], so we stop and put them in arr[j+1]

<hr/>
And now for the last item of the array.

| Step | i | j | temp | arr[j] | array|
| ---- |---|---|------|--------|------|
| 6    |4  | 1 | 16   |   23   |    [4, 8, 16, 23, 42, 15]|   
| 7    |5  | 4 | 15   |   42   |    [4, 8, 16, 23, 42, 42]|   
| 8    |5  | 3 | 15   |   23   |    [4, 8, 16, 23, 23, 42]|   
| 9    |5  | 2 | 15   |   16   |    [4, 8, 16, 16, 23, 42]|   
| 10   |5  | 1 | 15   |   8    |    [4, 8, 15, 16, 23, 42]|   

When arr[j] < temp, we put arr[j] in arr[j-1] to make room for the insertion. When we find the place where arr[j] >= arr[j-1], we know where to place temp.

Since this was the last item that needed sorting, it is done.
