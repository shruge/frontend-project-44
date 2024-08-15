import { getRndNum, gameEngine } from "../index.js";

const rule = 'Answer "yes" if given number is prime. Otherwise answe "no".';

const isItPrime = (num) => {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i+=1)
        if (num % i === 0) return false;

    return true;
}

const createBrainPrimeData = () => {
    const rndNum = getRndNum(100);
    const correctAnswer = isItPrime(rndNum) ? "yes" : "no";
	
    return {
        correctAnswer,
        question: rndNum,
    }
}

export default () => gameEngine(rule, createBrainPrimeData);
