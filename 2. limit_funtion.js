function limitFunc(fn, num) {
  let count = 0;

  return function (...args) {
    if (count < num) {
      count++;
      return fn(...args);
    } else {
      throw new Error('Execution limit reached');
    }
  };
}

function myFunction() {
  console.log('Executing myFunction');
}

var limited = limitFunc(myFunction, 2);
limited(); // Executes myFunction
limited(); // Executes myFunction
limited(); // Throws an Error: Execution limit reached
