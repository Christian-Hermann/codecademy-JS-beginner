const getSleepHours = (day) => {
  const d = day.toLowerCase();
  switch (d) {
    case "monday":
      return 5;
    case "tuesday":
      return 8;
    case "wednesday":
      return 7;
    case "thursday":
      return 9;
    case "friday":
      return 6;
    case "saturday":
      return 8;
    case "sunday":
      return 6;
  }
};

// console.log(getSleepHours('monday'))
// console.log(getSleepHours('tuesday'))
// console.log(getSleepHours('wednesday'))

// implicit return without {} and return
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

// console.log(getActualSleepHours())

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

// console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
  const actualSleepDebt = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepDebt === idealSleepHours) {
    console.log("User got the perfect amount of sleep.");
  } else if (actualSleepDebt > idealSleepHours) {
    console.log("User got more sleep than needed.");
  } else if (actualSleepDebt < idealSleepHours) {
    console.log("User should get more rest.");
  }
};

calculateSleepDebt();
// console.log(calculateSleepDebt())
