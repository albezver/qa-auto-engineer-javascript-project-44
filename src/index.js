import readlineSync from 'readline-sync';
import greetUser from './cli.js';
import { defineEvenOdd } from '../src/games/evenOdd.js';
import { calculateNumbers } from './games/calc.js';

const runGame = (gameRunner) => {
    const userName = greetUser();

    for (let i = 0; i < 3; i += 1) {
        const { question, answer: correctAnswer } = gameRunner(); // Деструктурируем объект

        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            break;
        }

        if (i === 2) {
            console.log(`Congratulations, ${userName}!`);
        }
    }
};    

export default runGame;