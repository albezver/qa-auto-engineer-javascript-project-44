import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const runGame = (gameRunner) => {
  const userName = greetUser();

  for (let i = 0; i < 3; i += 1) {
    const { answer: correctAnswer } = gameRunner();

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
