function countVowelsOrDigits(input) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (typeof input === 'string') {
    // Count vowels in the string
    return Array.from(input.toLowerCase()).filter(char => vowels.includes(char)).length;
  } else if (typeof input === 'number') {
    // Calculate the number of digits using logarithms
    return input === 0 ? 1 : Math.floor(Math.log10(Math.abs(input)) + 1);
  } else {
    throw new Error('Invalid input type');
  }
}

console.log(countVowelsOrDigits("Hello World")); // Output for vowels: 3
console.log(countVowelsOrDigits("Example 123 ok 33")); // Output for vowels: 4
console.log(countVowelsOrDigits(12345)); // Output for digits: 5
console.log(countVowelsOrDigits(9876543210)); // Output for digits: 10
