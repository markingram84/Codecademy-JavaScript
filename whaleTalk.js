let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i += 1) {
  for (let v = 0; v < vowels.length; v += 1) {
    if (input[i] === vowels[v]) {
      if (input[i] === "e" || vowels[v] === "u") {
        resultArray.push(input[i], input[i]);
      } else {
        resultArray.push(input[i]);
      }
    }
  }
}

console.log(resultArray.join(''));
