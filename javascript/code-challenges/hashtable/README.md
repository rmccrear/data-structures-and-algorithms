# Hashtables

## Basic idea

There are a few ways to store searchable data. The first way is to simply append each new item to the end of a list. Then iterate through the list to find it. This will take O(n)

The second way is the maintain a sorted array. Then you can use a binary search algorithm to search through the array to find your item. This will take O(log n) time.

There is a way to take, in practice, O(1) time to find an element. This is the hash table.

The basic idea it to give each value a key. This is how you will look up the value. For simplicity, let's make each key a numerical id. Then we use the key to lookup the value. This is actually how an array works. Lets makes some keys and values here:

    key1 = 1
    value1 = {fruit: 'apple'}

    key2 = 2
    value2 = {fruit: 'banana'}

    key3 = 3
    value3 = {fruit: 'cherry'}

Then we can just put them into an array and retrieve them in O(1) time.

    array = []
    array[key1] = value1;
    array[key2] = value2;
    array[key3] = value3;

    console.log(array[key1]) // {fruit: 'apple'}
    console.log(array[key2]) // {fruit: 'banana'}
    console.log(array[key3]) // {fruit: 'cherry'}

This works well for now. But then, what if we have this value?

    key4 = 4041;
    value4 = {name: 'small red plum'}

Our array might not be quite big enough to a key so large. Even if our array can handle this key, we might want to have keys of arbitrarily large size.

We can handle this with a hash function. A hash function, is a pure function that accepts a key in the "key space" (however you have defined "key space") and maps the key to a hashKey that has certain constraints. For simplicity, lets make our constraints be:

    the `hashKey` must be between 0 and 9.

So our hash function can be this:

    const hashFunction = (key) => key%10;

This hashFunction takes a number and maps it to a number from 0 to 9. How does this help us? It lets us have a smaller, well defined lookup table, in our case, an array of size 10. 

Lets take a look out how we could store all of these fruits, below.


    [key1, value1] = [1, {fruit: 'apple'}]
    [key2, value2] = [2, {fruit: 'banana'}]
    [key3, value3] = [3, {fruit: 'cherry'}]
    [key4, value4] = [4041, {fruit: 'small red plum'}]
  
    array = [];
    hashKey1 = value1%10 // 1
    hashKey2 = value2%10 // 2
    hashKey3 = value3%10 // 3
    hashKey4 = value4%10 // 1  The same as hashKey1!!!

    array[hashKey1] = value1;
    array[hashKey2] = value2;
    array[hashKey3] = value3;
    array[hashKey4] = value4; // Here is a problem!

When we get the same hashKey for two different keys, that is called a collision. Collisions are a part of hash tables. So we will need to work with them. One way to do this is to use buckets.

## Buckets

A bucket is just a collection of values and keys. The simplest bucket would just be a list of values and keys where the items are added on as they are put into the bucket. That is without sorting. So bucket 1 would look like this after the apple is added.

    bucket1 = [
      [1, {fruit: 'apple'}]
    ]

And like this after the 'small red plum' is added.

    bucket1 = [
      [1, {fruit: 'apple'}]
      [4041, {fruit: 'small red plum'}]
    ]

We could continue to add more and more. What is the search time for searching a bucket? It's O(n) where n is the size of the bucket. We don't have to worry about that is the size of the bucket is small. If the size of the bucket grows, we should think about increasing our hashKey space.

To conclude, lets look at how it would look with lists for buckets:

    // array = 
    [
      [],         // 0
      [          // 1
        [1, {fruit: 'apple'}]
        [4041, {fruit: 'small red plum'}]
      ],
      [2, {fruit: 'banana'}], // 2
      [3, {fruit: 'cherry'}], // 3
      [], // 4
      [], // 5
      [], // 6
      [], // 7
      [], // 8
      []  // 9
    ]

