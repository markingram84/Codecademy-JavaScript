// My current age
const myAge = 6;
let earlyYears = 2;
earlyYears *= 10.5;
// My current age minus the 2 years already calculated
let laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
// Adding the two different values needed to calcuate my age in dog years
let myAgeInDogYears = earlyYears + laterYears;
const myName = "Mark".toLowerCase();
// Displaying all variable sin a sentence
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
