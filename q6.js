// Return sum of odd and even numbers separately 
const arr = [12, 242, 43, 24, 45, 26, 47, 84, 429, 034];
let even = 0, odd = 0;
const even_odd = arr => {
    arr.forEach(element => {element % 2 === 0? even += element: odd += element});
    return console.log(`Sum of even nos: ${even} Sum of odd nos: ${odd}`);
}

even_odd(arr);