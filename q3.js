// find the biggest number in an array
const arr = [12, 242, 43, 24, 45, 26, 47, 84, 429, 034];
let lno = arr[0];
function largest(arr){
arr.forEach((element, i) => { element > lno ? lno = element: i++ });
return lno;}

largest(arr);