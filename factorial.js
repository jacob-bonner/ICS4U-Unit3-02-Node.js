// Created By: Jacob Bonner
// Created On: January 2021
// This program shows the user the factorial of an integer entered by the user

// This function finds and returns the factorial of a number passed into it
function findFactorial(userInteger) {
  // Checking if the number can have a factorial (integer greater than 0)
  if (userInteger > 0) {
    // If statement that checks if the integer passed in is equal to 1
    if (userInteger == 1) {
      // Returning 1
      return 1;
    } else {
      // Using recursion to solve for the factorial of the inputted integer
      let factorial = userInteger * findFactorial(userInteger - 1);
      return factorial;
    }
  } else {
    // Throwing error such that number entered cannot have a factorial
    throw "ERROR: Unable to find factorial of given integer";
  }
}

try {
  // Defining prompt for getting user input
  const prompt = require('prompt-sync')({sigint: true});

  // User input for the integer
  let numberInput = prompt("Enter an integer you want the factorial of: ");

  // Ensuring the number entered is of type integer
  let userNumber = parseFloat(numberInput, 10);

  // Defining the factorial variable before it is used
  let userFactorial;

  // Checking if the number inputted is an integer
  if (Number.isInteger(userNumber) == true) {
    // Calling the function that will find the factorial of the inputted integer
    userFactorial = findFactorial(userNumber);
  } else {
    // Throwing an error such that the inputted number was an invalid input
    throw "ERROR: Invalid Input";
  }

  // Returning the factorial of the inputted number to the user
  console.log("");
  console.log("The factorial of your number is:", userFactorial);

  // Catches and tells the user what error occurred
} catch (err) {
  console.log("");
  console.error(err);
}
