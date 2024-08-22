//Variables for random race number, early registration and runner age
let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 19;

//Adds 1000 to race number if an adult and registered early
if (age > 18 && early) {
  raceNumber += 1000;
} else {
  raceNumber = raceNumber;
}

//First statement is for adult runners who registered early
if (age > 18 && early) {
  console.log(
    `Your race number is ${raceNumber}, you will be running at 9:30 am, good luck!`
  );
//Statement is for adult runners who did not register early  
} else if (age > 18 && !early) {
  console.log(
    `Your race number is ${raceNumber}, you will be running at 11:00 am, good luck!`
  );
//Statement is for child runners
} else if (age < 18) {
  console.log(
    "Your race number is ${raceNumber}, you will be running at 12:30 pm, good luck!"
  );
//Statement is for runners exactly age 18
} else {
  console.log(`Please see registration desk!`);
}
