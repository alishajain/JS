// find the biggest number in an array
const arr = [12, 242, 43, 24, 45, 26, 47, 84, 429, 034];

arr.reduce((acc, curr, index, arr) => acc>curr?acc:curr, arr[0]);