import readlineSync from 'readline-sync';
import greetUser from './cli.js';

export const getRndNum = (max, min = 1) => Math.floor(Math.random() * (max - min) + min);

export const gameEngine = (rule, createGameData) => {
  const rounds = 3;
  const userName = greetUser();

  console.log(rule);

  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = createGameData();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
