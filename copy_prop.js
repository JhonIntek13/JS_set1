function copyProp(objA, objB, propList = null) {
  if (!propList) {
    // Copy all properties from objB to objA
    for (let prop in objB) {
      objA[prop] = objB[prop];
    }
  } else {
    // Copy specific properties from objB to objA
    for (let prop of propList) {
      if (objB.hasOwnProperty(prop)) {
        objA[prop] = objB[prop];
      }
    }
  }
}

var objA = { a: 1, b: 2, c: 3 };
var objB = { x: 100, y: 200, z: 300 };
var objC = { a: 1, b: 2, c: 3 };

// Copy all properties from objB to objA
copyProp(objA, objB);
console.log(objA); 

// Copy only properties 'x'  from objB to objC
copyProp(objC, objB, ['x']);
console.log(objC); 
