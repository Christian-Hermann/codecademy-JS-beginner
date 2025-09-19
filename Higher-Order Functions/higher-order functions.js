// Functions as data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};

// Write your code below
let isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();

console.log(isTwoPlusTwo.name);

// Functions as parameters
const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  const checkA = val + 2;
  const checkB = func(val);
  if (checkA === checkB) {
    return checkB;
  }
  return "inconsistent results";
};

console.log(checkConsistentOutput(addTwo, 10));
