"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    const ans = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield console.log("testing");
        return ans;
    });
}
catch (error) {
    console.log(error);
}
