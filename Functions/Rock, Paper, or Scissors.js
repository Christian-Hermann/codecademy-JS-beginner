const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
    ) {
      return userInput;
    } else {
      console.log("Error!");
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return "rock";
    } else if (randomNumber === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "Game was a tie.";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer wins.";
      } else {
        return "User wins.";
      }
    }
  
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer wins.";
      } else {
        return "User wins.";
      }
    }
  
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer wins.";
      } else {
        return "User wins.";
      }
    }
  };
  
  // console.log(determineWinner("rock", "paper"))
  // console.log(determineWinner("rock", "scissors"))
  // console.log(determineWinner("rock", "rock"))
  
  const playGame = () => {
    let userChoice = getUserChoice("rock");
    let computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`Computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice))
  };
  
  playGame();
  