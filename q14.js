//Given an array of objects. Write a function to find the sum of ages of each person.
const arr = [
    {
   	 name: "Jay",
   	 age: 60
    },
    {
   	 name: "Gloria",
   	 age: 36
    },
    {
   	 name: "Manny",
   	 age: 16
    },
    {
   	 name: "Joe",
   	 age: 9
    }
]

arr.reduce((acc, curr) => acc+curr.age, 0);