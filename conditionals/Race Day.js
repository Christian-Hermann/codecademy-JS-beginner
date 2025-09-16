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
