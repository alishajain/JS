//Return an array where odd numbers are incremented by 1 and even are decremented by 1
const arr = [382, 657, 283, 675, 124];
const odd_arr = arr.filter(no => no%2 === 0).map(no => no - 1);
console.log(odd_arr);

const even_arr = arr.filter(no => no%2 !== 0).map(no => no + 1);
console.log(even_arr);

let new_arr1 = arr =>{
    arr.forEach(element => {element % 2 === 0? element--: element++});
    return arr;
}

console.log(new_arr1(arr));