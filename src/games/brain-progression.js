import { greetUser } from "../cli.js";
import { checkAnswer, getRndNum } from "../index.js";

export const brainProgression = () => {
    const sequenceLength = 10;
    const userName = greetUser();

    let count = 0;

    console.log("What number is missing in the progression?");

    for (let i = 0; i < 3; i++) {
        const increasedBy = getRndNum(100);
        const removeIndex = getRndNum(sequenceLength, 0);
        const sequence = [getRndNum(100)];
    
        let removedNum = 0;
        let question = '';

        for (let i = 1; i < sequenceLength; i++)
            sequence.push(sequence[i - 1] + increasedBy);
    
        removedNum = sequence[removeIndex];
        question = sequence.map((item, i) => (
            i === removeIndex ? "..."
            : item
        )).join(' ');

	if (checkAnswer(question, String(removedNum), userName)) count+=1;
	else break;
    }

    if (count === 3) console.log(`Congratulations, ${userName}!`);
}
