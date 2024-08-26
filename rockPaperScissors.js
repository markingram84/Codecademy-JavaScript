const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Input not recognised, please try again!");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "bomb") {
    return "You won!";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw ${computerChoice}`);
  console.log(
    `The result of the game is: ${determineWinner(userChoice, computerChoice)}`
  );
};

playGame();
