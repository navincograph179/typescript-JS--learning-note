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

// function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
//   console.log(`User: ${name}, Paid: ${isPaid}`);
// }


const createUser = ({ name, isPaid }: { name: string; isPaid: boolean }) => {
  console.log(`Name: ${name}, Is Paid: ${isPaid}`);
};

let newUser = { name: "Choudhary", isPaid: true, email: "choudhary@gmail.com" };

// Pass newUser to the function
createUser(newUser);


const createCourse = (): {} => {
  return {};
};



