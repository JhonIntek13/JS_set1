function copyProp(objA, objB, propList = null) {
  if (propList) {
    const propsToCopy = new Set(propList);
    propsToCopy.forEach(prop => { //Here the function iterates only over the specified propList using forEach. There is no if condition inside this loop because we are directly checking and copying only the specified properties from objB to objA.
      if (prop in objB) {
        objA[prop] = objB[prop];
      }
    });
  } else {
    Object.keys(objB).forEach(prop => {
      objA[prop] = objB[prop];
    });
  }
}

var objA = { a: 1, b: 2, c: 3 };
var objB = { x: 100, y: 200, z: 300 };
var objC = { a: 1, b: 2, c: 3 };

// Copy all properties from objB to objA
copyProp(objA, objB);
console.log(objA);  // { a: 1, b: 2, c: 3, x: 100, y: 200, z: 300 }

// Copy only property 'x' from objB to objC
copyProp(objC, objB, ['x']);
console.log(objC);  // { a: 1, b: 2, c: 3, x: 100 }
