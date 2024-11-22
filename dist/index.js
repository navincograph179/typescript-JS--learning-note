"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
