function countVowelsAndDigits(input) {
  let vowelsCount = 0;
  let digitsCount = 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (typeof input === 'string') {
    for (let char of input.toLowerCase()) {
      if (vowels.includes(char)) {
        vowelsCount++;
      } else if (/\d/.test(char)) {
        digitsCount++;
      }
    }
  } else if (typeof input === 'number') {
    digitsCount = Math.floor(Math.log10(Math.abs(input))) + 1;

    const numStr = input.toString();
    for (let char of numStr) {
      if (vowels.includes(char)) {
        vowelsCount++;
      }
    }
  } else {
    throw new Error('Invalid input');
  }

  return { vowelsCount, digitsCount };
}

console.log(countVowelsAndDigits("Hello World")); // Output: { vowelsCount: 3, digitsCount: 0 }
console.log(countVowelsAndDigits("Example 123 ok 33")); // Output: { vowelsCount: 5, digitsCount: 5 }
console.log(countVowelsAndDigits(12345)); // Output: { vowelsCount: 0, digitsCount: 5 }
console.log(countVowelsAndDigits(9876543210)); // Output: { vowelsCount: 0, digitsCount: 10 }
