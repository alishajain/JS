// Return sum of odd and even numbers separately 
const arr = [12, 242, 43, 24, 45, 26, 47, 84, 429, 034];

arr.reduce((acc, curr)=>curr%2===0?{...acc, even:acc.even + curr}:{...acc, odd:acc.odd +curr},{even:0, odd:0})