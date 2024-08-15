import { getRndNum, gameEngine } from "../index.js";

const rule = "What number is missing in the progression?";

const createBrainProgressData = () => {
    const sequenceLength = 10;
    const increasedBy = getRndNum(100);
    const removeIndex = getRndNum(sequenceLength, 0);
    const sequence = [getRndNum(100)];
    
    let correctAnswer = 0;
    let question = '';

    for (let i = 1; i < sequenceLength; i+=1)
    	sequence.push(sequence[i - 1] + increasedBy);
    
    correctAnswer = sequence[removeIndex];
    question = sequence.map((item, i) => (
    	i === removeIndex ? ".."
        : item
     )).join(' ');

    return {
        question,
        correctAnswer
    }
}

export default () => gameEngine(rule, createBrainProgressData);
