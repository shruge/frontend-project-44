#!/usr/bin/env node
import { greetUser } from "../src/cli.js";
import readlineSync from "readline-sync";

let count = 0;
const userName = greetUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i++) {
   const rnd = Math.floor(Math.random() * 100);
   
   console.log(`Question: ${rnd}`);
   
   const answer = readlineSync.question("Your answer: ");
   let correct = '';

   if (rnd % 2) correct = "no";
   else correct = "yes";

   if (answer === correct) {
     count+=1;

     console.log("Correct!");
   }
   else {
     console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}"`);
     break;
   }
}

if (count === 3) console.log(`Congratulations, ${userName}!`);
