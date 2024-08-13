import readlineSync from "readline-sync";

export const getRndNum = (max, min = 1) => {
   return Math.floor(Math.random() * (max - min) + min);
}

export const checkAnswer = (question, correct, userName) => {
	console.log(`Question: ${question}`);
	
	const userAnswer = readlineSync.question("Your answer: ");

	if (userAnswer !== correct) {
		console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);
		console.log(`Let's try again, ${userName}!`);
		
		return false;
	}

	console.log("Correct!");
	return true;
}
