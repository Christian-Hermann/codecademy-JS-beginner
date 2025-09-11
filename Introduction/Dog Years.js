let myAge = 16;

// create variable that will change
let earlyYears = 2;

earlyYears *= 10.5;

// subtract 2 form myAge and set to laterYears
let laterYears = myAge - 2;

// multiply laterYears by 4
laterYears *= 4;

// add earlyYears and laterYears together
let myAgeInDogYears = earlyYears + laterYears;

// use toLowerCase method to make name lowercase letters
let myName = "Christian Hermann".toLowerCase();

// use template literals to replace the variables in the sentence.
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);

console.log(myName);
console.log(earlyYears);
console.log(laterYears);
