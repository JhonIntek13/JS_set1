function sortWords(words, order = 'ascending') {
  // Helper function to count the number of consonants in a word
  function countConsonants(word) {
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (consonants.includes(word[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }

  // Custom sorting comparator functions
  const comparators = {
    descending: (a, b) => b.localeCompare(a),
    lengthAscending: (a, b) => a.length - b.length,
    lengthDescending: (a, b) => b.length - a.length,
    consonantsAscending: (a, b) => countConsonants(a) - countConsonants(b),
    consonantsDescending: (a, b) => countConsonants(b) - countConsonants(a)
  };

  // Sort the words based on the selected order
  return words.sort(comparators[order]);
}


const words = ['banana', 'apple', 'orange', 'grapefruit'];

console.log(sortWords(words)); // Output: ['apple', 'banana', 'grapefruit', 'orange']
console.log(sortWords(words, 'descending')); // Output: ['orange', 'grapefruit', 'banana', 'apple']
console.log(sortWords(words, 'lengthAscending')); // Output: ['apple', 'orange', 'banana', 'grapefruit']
console.log(sortWords(words, 'lengthDescending')); // Output: ['grapefruit', 'banana', 'orange', 'apple']
console.log(sortWords(words, 'consonantsAscending')); // Output: ['apple', 'orange', 'banana', 'grapefruit']
console.log(sortWords(words, 'consonantsDescending')); // Output: ['grapefruit', 'banana', 'orange', 'apple']
