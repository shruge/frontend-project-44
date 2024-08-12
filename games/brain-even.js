#!/usr/bin/env node
import { greetUser } from "../src/cli.js";
import { checkAnswer } from "../src/index.js";

let count = 0;
const userName = greetUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i++) {
   const rnd = Math.floor(Math.random() * 100);
    
   let correct = '';

   if (rnd % 2) correct = "no";
   else correct = "yes";

   if (checkAnswer(rnd, correct, userName)) count+=1;
   else break;
}

if (count === 3) console.log(`Congratulations, ${userName}!`);
