# Hashmap left-join

The logic of a 'left-join' is taking everything on the left, associating it with what is found on the right. For example if you have the objects:

    left = [
      {id: 1, species: "cat"},
      {id: 2, species: "dog"},
      {id: 3, species: "owl"}
    ]
    right = [
      {id: 1, name: "Fluffy" },
      {id: 3, name: "ORLY" }
      {id: 4, name: "Spot"}
    ]

A left join on 'id' would give everything found on the left, plus whatever can be associated on the right. So we will get:

    leftJoin = [
      {id: 1, species: "cat", name: "Fluffy"},
      {id: 2, species: "dog", name: null},
      {id: 3, species: "owl", name: "ORLY"}
    ]

In this challenge, we are given two hashmaps. We will need to return an object that is left-joined on the their keys.

## Implementation

First, we will need to traverse all the elements of the left object. Then we will need use the key to search for the elements in the hashmap of the right.

## Algorithmic cost

The traversal of the left hashmap could be expensive. It will be O(m+n) where m is the number of buckets in the hashmap and n is the number of items. First we must search each bucket to see if the bucket has any items. Then we much search through each bucket. This could be sped up if we kept a list of all non empty buckets. In that case, it would be O(n).
