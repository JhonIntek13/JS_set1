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
  
    return {
      vowels: vowelsCount,
      digits: digitsCount
    };
}


console.log(countVowelsAndDig("Hello World")); 
console.log(countVowelsAndDig("Example 123 ok 33"));
console.log(countVowelsAndDig(12345)); 
console.log(countVowelsAndDig(9876543210)); 
