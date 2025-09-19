// The for loop
for (let i = 5; i <= 10; i++) {
  console.log(i);
}

// Looping in reverse
for (let i = 3; i >= 0; i--) {
  console.log(i);
}

// Looping through arrays
const vacationSpots = ["Bali", "Paris", "Tulum"];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

// Nested loops
const bobsFollowers = ["Kit", "Hermann", "Lisa", "Spampinato"];
const tinasFollowers = ["Kit", "Lisa", "Dreyfus"];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// The While Loop
const cards = ["diamond", "spade", "heart", "club"];

// Write your code below
let currentCard;

while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// Do...While Statements
let cupsOfSugarNeeded = 10;
let cupsAdded = 0;

do {
  cupsAdded += 1;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

// The break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}

console.log("And if you don't know, now you know.");
