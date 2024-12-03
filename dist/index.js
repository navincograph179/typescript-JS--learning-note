"use strict";
console.log('Hello Typescript');
const greeting = (a, b) => {
    return a + b;
};
console.log(greeting(3, 5));
// any 
let hero;
function getHero() {
    return "thor";
}
hero = getHero();
function signUp(name, email, isPaid) { }
let loginUser = (name, email, isPaid = true) => { };
loginUser("himesh", "himesh@gmail.com");
signUp("Niles", "nitesh@gmail.com", true);
const addTwo = (num) => {
    console.log(num + 2);
};
addTwo(2);
function getValue(num) {
    if (num > 5) {
        return true;
    }
    return "200 ok";
}
//in the case of arrow function
const getHello = (s) => {
    return "hello";
};
// in the case of Arrays
// const fruits = ["Apple", "Mango", "Banana", "Grapes", "Papaya"];
// fruits.map((fruit): string => {
//  return `i love: ${fruit}`
// });
// // void: it does not return any value
// function consoleError(errMsg: string): void {
//   console.log(errMsg)
// }
// // never: it never return the value.
// function errorHandler(errMsge: string): never {
//   throw new Error(errMsge)
// }
console.log("auto test");
// src/index.ts
const greetingAll = "Hello, World!";
const element = document.getElementById("message");
if (element) {
    element.innerHTML = greetingAll; // Modify the DOM element
}
