function countVowelsOrDigits(input, countType) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (typeof input === 'string') {
    for (let char of input.toLowerCase()) {
      if (countType === 'vowels' && vowels.includes(char)) {
        count++;
      } else if (countType === 'digits' && /\d/.test(char)) {
        count++;
      }
    }
  } else if (typeof input === 'number' && countType === 'digits') {
    count = Math.floor(Math.log10(Math.abs(input)) + 1);
  } else {
    throw new Error('Invalid input');
  }

  return count;
}

console.log(countVowelsOrDigits("Hello World", 'vowels')); // Output: 3
console.log(countVowelsOrDigits("Example 123 ok 33", 'vowels')); // Output: 5
console.log(countVowelsOrDigits(12345, 'digits')); // Output: 5
console.log(countVowelsOrDigits(9876543210, 'digits')); // Output: 10
