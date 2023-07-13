function countVowelsAndDig(input) {
  let vowelsCount = 0;
  let digitsCount = 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let char of input.toString().toLowerCase()) {
    if (vowels.includes(char)) {
      vowelsCount++;
    } else if (/\d/.test(char)) {
      digitsCount++;
    }
  }

  if (typeof input === 'string') {
    return vowelsCount;
  } else if (typeof input === 'number') {
    return digitsCount;
  } else {
    throw new Error('Invalid input');
  }
}

console.log(countVowelsAndDig("Hello World")); // Output: 3 (vowelsCount)
console.log(countVowelsAndDig("Example 123 ok 33")); // Output: 2 (vowelsCount)
console.log(countVowelsAndDig(12345)); // Output: 5 (digitsCount)
console.log(countVowelsAndDig(9876543210)); // Output: 0 (digitsCount)
