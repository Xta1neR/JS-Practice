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