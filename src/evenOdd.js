#!/usr/bin/env node
import readlineSync from 'readline-sync';

const defineEvenOdd = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswer;
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const askedNum = readlineSync.question('Your answer: ').toLowerCase();

    if (num % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    if (askedNum === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${askedNum}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default defineEvenOdd;
