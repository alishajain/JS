//Write a function that accepts a number as input and inserts hyphens between every two even numbers.
const no = 24345687;
const arr = Array.from(String(no), Number);

const newArr = arr.map((ele, index, array)=> (ele%2 ===0 && array[index+1]%2 ===0)?(ele + '-'):ele);
const result = newArr.join('');
console.log(result);