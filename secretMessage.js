let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

console.log(secretMessage.length);

const removedString = secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push("to", "Program");

secretMessage[7] = "right";

secretMessage.shift();

secretMessage.splice(5,5, "know");

secretMessage.unshift("Programming");



console.log(secretMessage.join(` `));
