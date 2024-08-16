import { getRndNum, gameEngine } from '../index.js';

const maxRndNum = 100;
const minRndIndex = 0;
const rule = 'What number is missing in the progression?';

const createSequence = (length, startValue, increasedBy) => {
  const sequence = [startValue];

  for (let i = 1; i < length; i += 1) {
    sequence.push(sequence[i - 1] + increasedBy);
  }

  return sequence;
};

const createBrainProgressData = () => {
  const sequenceLength = 10;
  const startValue = getRndNum(maxRndNum);
  const increasedBy = getRndNum(maxRndNum);
  const removeIndex = getRndNum(sequenceLength, minRndIndex);
  const sequence = createSequence(sequenceLength, startValue, increasedBy);
  const correctAnswer = String(sequence[removeIndex]);
  const question = sequence.map((item, i) => (
    i === removeIndex ? '..'
      : item
  )).join(' ');

  return {
    question,
    correctAnswer,
  };
};

export default () => gameEngine(rule, createBrainProgressData);
