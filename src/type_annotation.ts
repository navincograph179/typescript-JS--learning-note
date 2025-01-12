
// Q.1 Declare a variable message of type string and assign it the value "Hello, Typescript!"

let message:string = "Hello, Typescript!"
console.log(message);


//Q.2 Create two variables firstName and lastName of type string and assign them your first name and last name, respectively. Concatenate the two variables and store the result in a variable called fullName.

let firstName:string = "Navin"
let lastName:string = "Gurung"
let fullName: string = firstName + ' ' + lastName
console.log(fullName);

//Q.3 Declare a variable sentence of type string and assign it a sentence of your choice. Find the length of the string and store it in a variable called sentenceLength.

let sentence: string = "Typescript"
let sentenceLength:number = sentence.length
console.log(sentenceLength);


//Q.4 Declare a variable text of type string and assign it a sentence of your choice. Convert the sentences in Upper Case and Lower case.

let word:string = "Iphone"
let upperCase:string = word.toUpperCase()
console.log(upperCase);
let lowerCase:string = word.toLowerCase()
console.log(lowerCase);
