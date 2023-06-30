function limitFunc(fn, num) {
  let count = 0;
// Here the function starts to iterate over the counter and the limit num
  return function (...args) {
    if (count < num) {
      count++;
      return fn(...args);
    } else {
      console.log('Execution limit reached');
    }
  };
}

function myFunction() {
    console.log('Executing myFunction');
  }
  
  var limited = limitFunc(myFunction, 3);
  limited(); // Executes myFunction
  limited(); // Executes myFunction
  limited(); // Does not execute myFunction
  