// insertShiftArray
const arr = [1,2,3,4,5,6,7,8,9]
const b = 10
let i = arr.length      // i starts at the end,
                        // we expand the array by 1
let k = Math.ceil(arr.length/2) // k is the middle
while(k<i){             // while i is greater than middle
    arr[i]=arr[i-1];    // shift up
    i--;                // descend by one
}
arr[k] = b; // insert into the middle position

console.log(arr)
