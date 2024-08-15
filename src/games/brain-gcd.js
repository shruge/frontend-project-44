import { getRndNum, gameEngine } from "../index.js";

const rule = "Find the greatest common divisor of given numbers.";

const getGCD = (num1, num2) => {
    if (num1 === num2) return num1;
      
    const result = num1 % num2;

    if (result === 0) return num2;
   
    return getGCD(num2, result);
}
   
const createBrainGCDData = () => {
    const rndNum1 = getRndNum(100);
    const rndNum2 = getRndNum(100);
    const question = `${rndNum1} ${rndNum2}`;
    const correctAnswer = getGCD(rndNum1, rndNum2);
      
    return {
        question,
        correctAnswer
    } 
}

export default () => gameEngine(rule, createBrainGCDData);
