"use strict";
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
// Function that returns a User object
const newUserObj = (user) => {
    // You return a new object with the same shape as User
    return { name: "", phoneNumber: 5, isActive: true };
};
// Calling the function with a valid User object
newUserObj({ name: "John", phoneNumber: 5, isActive: true });
