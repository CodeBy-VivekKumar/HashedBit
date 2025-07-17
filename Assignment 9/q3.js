function modifyArray(arr) {
  arr.push("New Element");
  arr.pop(); // Removes the same element we just pushed
  return arr;
}

console.log(modifyArray([1, 2, 3])); // Output: [1, 2, 3]
