//Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.
const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

arr.reduce((acc, curr)=>curr%2===0?curr+1:curr)