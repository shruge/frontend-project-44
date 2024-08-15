import { getRndNum, gameEngine } from "../index.js";

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const createBrainEvenData = () => {
    const rndNum = getRndNum(100);
    const correctAnswer = rndNum % 2 ? "no" : "yes";
    
    return {
    	correctAnswer,
    	question: rndNum,
    }
}

export default () => gameEngine(rule, createBrainEvenData);
