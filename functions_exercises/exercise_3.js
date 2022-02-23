let rlSync = require('readline-sync');

let getNumber = (prompt) => {
	return Number(rlSync.question(prompt))
}

let multiply = (a, b) => a * b;

firstNum = getNumber('Enter the first number ')
secondNum = getNumber('Enter the second number ')

let finalAnswer = multiply(firstNum, secondNum)
console.log(finalAnswer);
