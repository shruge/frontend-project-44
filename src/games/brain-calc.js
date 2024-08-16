import { getRndNum, gameEngine } from '../index.js';

const maxRndNum = 100;
const operatorStart = 0;
const operators = ['+', '-', '*'];
const operatorsLen = operators.length;
const rule = 'What is the result of the expression?';

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error('Incorrect value');
  }
};

const createBrainCalcData = () => {
  const num1 = getRndNum(maxRndNum);
  const num2 = getRndNum(maxRndNum);
  const operatorIndex = getRndNum(operatorsLen, operatorStart);
  const rndOperator = operators[operatorIndex];
  const question = `${num1} ${rndOperator} ${num2}`;
  const correctAnswer = String(calc(num1, num2, rndOperator));

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(rule, createBrainCalcData);
