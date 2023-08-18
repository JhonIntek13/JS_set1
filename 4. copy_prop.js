function copyProp(objA, objB, propList = null) {
  const propsToCopy = new Set(propList);

  for (let prop in objB) {
    if (!propsToCopy || propsToCopy.has(prop)) {
      objA[prop] = objB[prop];
    }
  }
}

var objA = { a: 1, b: 2, c: 3 };
var objB = { x: 100, y: 200, z: 300 };
var objC = { a: 1, b: 2, c: 3 };

// Copy all properties from objB to objA
copyProp(objA, objB);
console.log(objA); 

// Copy only property 'x' from objB to objC
copyProp(objC, objB, ['x']);
console.log(objC);
