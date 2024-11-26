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
// function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
//   console.log(`User: ${name}, Paid: ${isPaid}`);
// }
const createUser = ({ name, isPaid }) => {
    console.log(`Name: ${name}, Is Paid: ${isPaid}`);
};
let newUser = { name: "Choudhary", isPaid: true, email: "choudhary@gmail.com" };
// Pass newUser to the function
createUser(newUser);
const createCourse = () => {
    return {};
};
