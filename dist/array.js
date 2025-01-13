"use strict";
let fruits = ["Apple", "Grapes", "Banana"];
let tsFruits = ["Apple", "Grapes", "Banana"];
console.log(fruits[1]);
console.log(tsFruits[1]);
let numbers = [2, 3, 4, 5, 6];
let tscNumbers = [2, 3, 4, 5, 6];
console.log(tscNumbers[1]);
// in the case of number or string in array
let numOrString = ["apple", 2, "ball", 3, "cat", 4];
let tscNumOrString = ["apple", 2, "ball", 3, "cat", 4];
tscNumOrString.push("banana");
console.log(tscNumOrString);
console.log(numOrString[4]);
console.log("method two: " + tscNumOrString[3]);
console.log("method two: " + tscNumOrString[4]);
const allUser = [];
allUser.push({ name: "Navin", isActive: false });
console.table(allUser);
try {
    const ans = async () => {
        const response = await console.log("testing");
        return ans;
    };
}
catch (error) {
    console.log(error);
}
