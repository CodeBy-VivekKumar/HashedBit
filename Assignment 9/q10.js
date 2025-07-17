const nums = [5, 10, 15];

function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log(sumArray(nums)); // Output: 30
