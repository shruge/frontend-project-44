import { greetUser } from "../cli.js";
import { checkAnswer } from "../index.js";

export const brainEven = () => {
   let count = 0;
   const userName = greetUser();

   console.log('Answer "yes" if the number is even, otherwise answer "no".');

   for (let i = 0; i < 3; i++) {
      const rnd = Math.floor(Math.random() * 100);
      const correct = rnd % 2 ? "no" : "yes";

      if (checkAnswer(rnd, correct, userName)) count+=1;
      else break;
   }

   if (count === 3) console.log(`Congratulations, ${userName}!`);
}
