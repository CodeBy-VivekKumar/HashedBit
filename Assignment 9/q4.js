const numbers = [2, 4, 6, 8];

function squareNumbers(arr) {
  return arr.map(num => num * num);
}

console.log(squareNumbers(numbers)); // Output: [4, 16, 36, 64]
