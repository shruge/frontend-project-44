import { greetUser } from "../cli.js";
import { checkAnswer, getRndNum } from "../index.js";

export const brainGCD = () => {
   const userName = greetUser();
   
   let count = 0;
   
   const getGCD = (num1, num2) => {
      if (num1 === num2) return num1;
      
      const result = num1 % num2;

      if (result === 0) return num2;
   
      return getGCD(num2, result);
   }


   console.log("Find the greatest common divisor of given numbers.");

   for (let i = 0; i < 3; i++) {
      const rndNum1 = getRndNum(100);
      const rndNum2 = getRndNum(100);
      const question = `${rndNum1} ${rndNum2}`;
      const result = getGCD(rndNum1, rndNum2);

      if (checkAnswer(question, String(result), userName)) count+=1;
      else break;
   }
   
   if (count === 3) console.log(`Congratulations, ${userName}!`);
}
