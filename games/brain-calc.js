#!/usr/bin/env node
import { greetUser } from "../src/cli.js";
import { checkAnswer } from "../src/index.js";

const userName = greetUser();
const operators = ['+', '-', '*'];
let count = 0;

console.log("What is the result of the expression");

for (let i = 0 ; i < 3; i++) {
	const randOperator = operators[Math.floor(Math.random() * 3)];
	const num1 = Math.floor(Math.random() * (100 - 1) + 1);
	const num2 = Math.floor(Math.random() * (100 - 1) + 1);
	const result = calc(num1, num2, randOperator);
	
	if (checkAnswer(`${num1} ${randOperator} ${num2}`, String(result), userName))
		count+=1;
	else break;
}

if (count === 3) console.log(`Congratulations, ${userName}!`);

function calc (num1, num2, operator) {
   switch(operator) {
      case '+':
         return num1 + num2;
      case '-':
         return num1 - num2;
      case '*':
         return num1 * num2;
      default:
         return null;
   }
}
