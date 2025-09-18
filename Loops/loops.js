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
