function sumOfProducts(n1, n2) {
  const str1 = n1.toString().split('').reverse();
  const str2 = n2.toString().split('').reverse();

  let sum = 0;
  const maxLength = Math.max(str1.length, str2.length);

  for (let i = 0; i < maxLength; i++) {
    const digit1 = parseInt(str1[i] || 0);
    const digit2 = parseInt(str2[i] || 0);
    sum += digit1 * digit2;
  }

  return sum;
}


console.log(sumOfProducts(6, 34));      // (6*4)+(0*3) = 24
console.log(sumOfProducts(123, 456));   // (3*6)+(2*5)+(1*4) = 18 + 10 + 4 = 32
