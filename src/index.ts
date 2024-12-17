console.log('Hello Typescript');

const greeting = (a: number, b:number) => {
  return a + b;
};

console.log(greeting(3, 5));

// any 
let hero: string;

function getHero () {
  return "thor";
}

hero = getHero();

function signUp (name:string, email:string, isPaid:boolean){}

let loginUser = (name: string, email: string, isPaid :boolean =true) => {}

loginUser("himesh", "himesh@gmail.com")

signUp("Niles", "nitesh@gmail.com", true);


const addTwo = (num: number) => {
  console.log(num + 2);
}

addTwo(2)


function getValue (num : number) {
  if(num > 5) {
      return true;
  }
  return "200 ok"
}

//in the case of arrow function

const getHello= (s: string) : string => {
  return "hello"
}


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
const greetingAll: string = `<ul>
<li>${getHello("HEllo")}</li>
<li>${4+5}</li>
<li>${7+7}</li>
</ul>`;
const element = document.getElementById("message");

if (element) {
  element.innerHTML = greetingAll;  // Modify the DOM element
}
