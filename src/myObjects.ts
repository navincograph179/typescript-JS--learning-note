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


// Type alias for User object
type User = {
  name: string;
  phoneNumber: number;
  isActive: boolean;
}

// Function that returns a User object
const newUserObj = (user: User): User => {
  // You return a new object with the same shape as User
  return { name: "", phoneNumber: 5, isActive: true }
}

// Calling the function with a valid User object
newUserObj({ name: "John", phoneNumber: 5, isActive: true });



type User1 = {
    readonly  _id : string;
    name: string;
    email : string;
    telephone: number;
    isOnline: boolean;
    creditCard? : number;
    //the question marks allow us, it does not required.
}


let myUser: User1  = {
  _id : "1122334455",
  name : "Harry",
  email : "Harry@gmail.com",
  telephone: 123456789,
  isOnline: false,
}


myUser.name = "Hero";

console.log(`${myUser.name} and ${myUser._id}`);


type cardNumber  = {
  cardnumber : string;
}
 
type cardDate = {
  carddate : string;
}

type cardDetails = cardNumber & cardDate & {
  cvv : number;
}
// two types will be merge and add another property.
let creditCard : cardDetails = {
  cardnumber : "12546",
  carddate : "2024", 
  cvv : 12345
}

console.log(creditCard.cardnumber);
console.log(creditCard.carddate);
console.log(creditCard.cvv);