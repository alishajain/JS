//Sum of odd numbers
const arr = [12, 242, 43, 24, 45, 26, 47, 84, 429, 034];
const index = 0;
arr.reduce((acc, value) => value%2 !== 0? acc + value: acc+0, index);