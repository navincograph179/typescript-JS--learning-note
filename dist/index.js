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
