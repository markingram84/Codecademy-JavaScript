// Sets the variable kelvin to a constant value of 293
const kelvin = 300;
// Converts kelvin into celsius
const celsius = kelvin - 273;
// Converts celsius into fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// Rounds fahrenheit down to the closest value
fahrenheit = Math.floor(fahrenheit);
// Converts celsius into newton
let newton = celsius * (33 / 100);
// Rounds newton down to the closest value
newton = Math.floor(newton);
//Displays the temp in farhenihet and newton to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
