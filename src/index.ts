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

