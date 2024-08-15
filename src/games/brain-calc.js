import { getRndNum, gameEngine } from "../index.js";

const rule = "What is the result of the expression?";

const calc = (num1, num2, operator) => {
   switch(operator) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      default: return null;
   }
}

const createBrainCalcData = () => {
    const operators = ['+', '-', '*'];
    const randOperator = operators[getRndNum(3, 0)];
    const num1 = getRndNum(100);
    const num2 = getRndNum(100);
    const question = `${num1} ${randOperator} ${num2}`;
    const correctAnswer = calc(num1, num2, randOperator);

    return {
        question,
        correctAnswer
    }
}

export default () => gameEngine(rule, createBrainCalcData)
