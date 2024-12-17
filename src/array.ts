let fruits: string[] = ["Apple","Grapes", "Banana"]

let tsFruits: Array<string> = ["Apple","Grapes", "Banana"]
console.log(fruits[1])
console.log(tsFruits[1])


let numbers : number[] = [2,3,4,5,6];
let tscNumbers: Array<number> = [2,3,4,5,6];

console.log(tscNumbers[1]);
// in the case of number or string in array
let numOrString : (string | number) [] = ["apple", 2, "ball", 3, "cat", 4]

let tscNumOrString : Array<number | string> = ["apple", 2, "ball", 3, "cat", 4]

tscNumOrString.push("banana");
console.log(tscNumOrString);
console.log(numOrString[4]);

console.log("method two: " + tscNumOrString[3]);
console.log("method two: " + tscNumOrString[4]);

//with the type

type User0 = {
  name : string
  isActive: boolean
}

const allUser : User0[] = []


allUser.push({name: "Navin", isActive:false})

console.table(allUser)