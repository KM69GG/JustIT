/* JavaScript - Day 4 Tasks:
 
1: Write a function that takes a first name and surname as arguments and returns a personalised greeting to the console.
 
2: Write a function that takes a string as an argument, sorts the string into alphabetical order and logs it to the console.
 
3: Write a cash machine / atm function that takes in a withdrawal amount and a pin number as an argument and compares the pin and and withdrawal amount against a stored pin and account balance. If the pin matches and the balance is sufficient approve the transaction, if not decline the transaction.
 
4: Research Arrow Functions to identify how they differ from function declarations. https://www.programiz.com/javascript/arrow-function */

function personalizedGreeting(firstName, surname) {
  console.log(`Hello, ${firstName} ${surname}!`);
}

// Example usage:
personalizedGreeting("John", "Doe");

function sortStringAlphabetically(inputString) {
  const sortedString = inputString.split("").sort().join("");
  console.log(sortedString);
}

// Example usage:
sortStringAlphabetically("javascript");


// Assuming you have a stored PIN and account balance
const storedPIN = '1234';
const accountBalance = 1000; // Example balance

function cashMachine(withdrawalAmount, enteredPIN) {
  if (enteredPIN === storedPIN && withdrawalAmount <= accountBalance) {
    console.log('Transaction approved. Take your cash.');
  } else {
    console.log('Transaction declined. Please check your PIN or balance.');
  }
}

// Example usage:
cashMachine(500, '1234');
