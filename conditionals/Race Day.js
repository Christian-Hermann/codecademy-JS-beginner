let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let age = 18;

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
  console.log(
    `Will race at 9:30am and their race number will be ${raceNumber}.`
  );
} else if (age > 18 && !registeredEarly) {
  console.log(
    `They will race at 11:00am and their race number will be ${raceNumber}.`
  );
} else if (age < 18) {
  console.log(
    `Your will race at 12:30pm and your race nnumber will be ${raceNumber}.`
  );
} else if (age === 18) {
  console.log("Please see the registration desk.");
}

// using defualt parameters
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

// Return functions
function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

// Helper functions
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);
