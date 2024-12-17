const menu = [
  {name: "Margherita", price: 200},
  {name: "Pepperpni", price: 400},
  {name: "Hawaiian", price: 500},
  {name: "Veggie", price: 600},
];

let cashRegister = 100;  // Use 'let' instead of 'const' so it can be modified
const orderQueue: { pizza: { name: string; price: number; }; status: string; }[] = [];

/**
 * Utility function "addNewPizza" that takes a pizza object and adds it to the menu.
 */
const addNewPizza = (pizzaObj: { name: string; price: number; }) => {
  menu.push(pizzaObj);
};

/**
 * Utility function "placeOrder" that takes a pizza name parameter and:
 * 1. Finds that pizza object in the menu
 * 2. Adds the income to the cashRegister
 * 3. Pushes a new "order object" to the orderQueue
 * 4. Returns the new order object
 */
const placeOrder = (pizzaName: string) => {
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
  
  if (!selectedPizza) {
    console.log("Pizza not found on the menu");
    return null;  // Return null if pizza is not found
  }
  
  cashRegister += selectedPizza.price;

  // Create new order object
  const newOrder = {
    pizza: selectedPizza,
    status: "ordered"
  };
  
  orderQueue.push(newOrder);
  return newOrder;
};

// Example usage of placeOrder
placeOrder("Pepperpni");
placeOrder("Hawaiian");
placeOrder("Pepperpni");

// You can display the updated orderQueue on your webpage (if applicable)
console.log(orderQueue);


// Use map() to get the names and prices of all pizzas in the orderQueue
const pizzaDetails = orderQueue.map(order => {
  return {
    name: order.pizza.name,
    price: order.pizza.price
  };
});

// Display pizza names and prices
pizzaDetails.forEach(pizza => {
  // Append to some element on your page to display
  const pizzaName = pizza.name;
  const pizzaPrice = pizza.price;

  // Example of appending to the DOM (assuming you have HTML elements with these IDs)
 
});