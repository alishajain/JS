//Return an array where odd numbers are incremented by 1 and even are decremented by 1
const arr = [382, 657, 283, 675, 124];

arr.map((element)=>element%2===0?element-1:element+1);