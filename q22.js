//Count the occurrences of distinct elements in the given array
const input = [
	['a', 'b', 'c'],
	['c', 'd', 'e'],
	['e', 'd', 'f'],
  ];
const new_input = input.reduce((acc,curr)=>acc.concat(curr));

new_input.reduce(function(count, letter){
    letter in count?(count[letter]++):(count[letter])=1;
    return count;
}, {});