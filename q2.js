//Sum of numbers at odd index
const arr = [12, 242, 43, 24, 45, 26, 47, 84, 429, 034];
const initialindex = 0;
arr.reduce((acc, value, currentindex) => currentindex%2 !== 0? acc + value: acc + 0, initialindex);