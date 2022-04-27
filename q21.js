//Flatten an array without using flat().
const input = [
	['a', 'b', 'c'],
	['c', 'd', 'e'],
	['e', 'd', 'f'],
  ];

input.reduce((acc, curr)=>acc.concat(curr));