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