// Arrays with let and const
let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo";

console.log(condiments);

condiments = ["Mayo"];

console.log(condiments);

utensils[3] = "Spoon";

console.log(utensils);

// Array Methods
const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];

groceryList.shift();
// console.log(groceryList);

groceryList.unshift("popcorn");
// console.log(groceryList)

// console.log(groceryList.slice(1, 4))

// console.log(groceryList)

const pastaIndex = groceryList.indexOf("pasta");

console.log(pastaIndex);

// Arrays and Functions
