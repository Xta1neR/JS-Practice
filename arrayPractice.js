//For the given start state of an array, change it to the final state by performing methods. 

// start : ["january","july","march","august"]
// end : ["july", "june", "march", "august"]

let test = ["january","july","march","august"];
// 1. Removing the first element with shift method. 
test.shift();
console.log(test); // ["july","march","august"]

// 2. Adding "june" to the second index.
test[0] = "june";
console.log(test); // ["june","march","august"]

// 3. Adding "july" to the first index.
test.unshift("july");
console.log(test); // ["july","june","march","august"]

// Learing the slice method
let colors = ["red", "blue", "green", "yellow", "purple"];
console.log(colors.slice(-3)); // colors.slice(); // returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.



