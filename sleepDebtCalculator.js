const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 5.5;
      break;
    case "wednesday":
      return 6.5;
      break;
    case "thursday":
      return 7;
      break;
    case "friday":
      return 6;
      break;
    case "saturday":
      return 5;
      break;
    case "sunday":
      return 4;
      break;
    default:
      return "Please input a valid day of the week.";
  }
};

const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

const getIdealSleepHours = () => {
  let idealHours = 8;
  return (idealHours *= 7);
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log(
      `You got ${actualSleepHours} hours of sleep, this is the same as the ideal amount of ${idealSleepHours} hours a week`
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${actualSleepHours} hours of sleep, this is ${actualSleepHours - idealSleepHours} hours more than the ideal amount of ${idealSleepHours} hours a week`
    );
  } else {
    console.log(
      `You got ${actualSleepHours} hours of sleep, this is ${idealSleepHours - actualSleepHours} hours less than the ideal amount of ${idealSleepHours} hours a week`
    );
  }
};

calculateSleepDebt();

/*
This is the tests I wrote along the way:
console.log(getSleepHours("monday"));
console.log(getSleepHours("tuesday"));
console.log(getSleepHours("wednesday"));
console.log(getSleepHours("thursday"));
console.log(getSleepHours("friday"));
console.log(getSleepHours("saturday"));
console.log(getSleepHours("sunday"));
console.log(getSleepHours("Sunday"));
console.log(getSleepHours("thatday"));
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
*/
