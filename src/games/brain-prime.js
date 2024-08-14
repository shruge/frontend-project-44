import { greetUser } from "../cli.js";
import { checkAnswer, getRndNum } from "../index.js";

const isItPrime = (num) => {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++)
	if (num % i === 0) return false;

    return true;
}

export const brainPrime = () => {
    const userName = greetUser();
    
    let count = 0;

    console.log('Answer "yes" if given number is prime. Otherwise answe "no".');

    for (let i = 0; i < 3; i++) {
        const rndNum = getRndNum(100);
	const correctAnswer = isItPrime(rndNum) ? "yes" : "no";

	if (checkAnswer(rndNum, correctAnswer, userName)) count+=1;
	else break;
    }

    if (count === 3) console.log(`Congratulations, ${userName}!`);
}
