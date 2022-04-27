//Given an array. Write a function to get the sum of all elements which are greater than 50
const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];
const i =0;
arr.reduce((acc, curr) => curr>50? acc+curr: acc, i);