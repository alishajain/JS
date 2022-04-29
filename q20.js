//Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.
const str = 'alisha'
const arr = Array.from(String(str));
const newArr = arr.map((ele) => (ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u')?ele.toUpperCase():ele.toLowerCase());
const result = newArr.join('');
console.log(result);