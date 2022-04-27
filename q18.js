//Write a function that accepts a number as input and inserts hyphens between every two even numbers.
const no = 24345687;

function new_no(no){
    for(let i = 0; i < no.length; i++){
     (no[i] % 2 === 0 && no[i+1] %2===0)?no.join('-'):no.join('');
    }
    console.log(no);
    return no2;
}

console.log(new_no(no));