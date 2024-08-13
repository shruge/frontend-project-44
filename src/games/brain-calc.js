import { greetUser } from "../cli.js";
import { checkAnswer, getRndNum } from "../index.js";

const calc = (num1, num2, operator) => {
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

export const brainCalc = () => {
   const userName = greetUser();
   const operators = ['+', '-', '*'];
   
   let count = 0;

   console.log("What is the result of the expression");

   for (let i = 0 ; i < 3; i++) {
	const randOperator = operators[getRndNum(3, 0)];
	const num1 = getRndNum(100);
	const num2 = getRndNum(100);
	const question = `${num1} ${randOperator} ${num2}`;
	const result = calc(num1, num2, randOperator);
	
	if (checkAnswer(question, String(result), userName)) count+=1;
	else break;
   }

   if (count === 3) console.log(`Congratulations, ${userName}!`);
}
