import { getRndNum, gameEngine } from '../index.js';

const maxRndNum = 100;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isItEven = (num) => num % 2 === 0;

const createBrainEvenData = () => {
  const rndNum = getRndNum(maxRndNum);
  const correctAnswer = isItEven(rndNum) ? 'yes' : 'no';

  return {
    correctAnswer,
    question: rndNum,
  };
};

export default () => gameEngine(rule, createBrainEvenData);
