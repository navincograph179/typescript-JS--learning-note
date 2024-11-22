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