import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const runGame = (game) => {
  const { description, getQuestionAndAnswer } = game();
  const userName = greetUser();
  console.log(description);
  const roundsAmount = 3;

  for (let i = 0; i < roundsAmount; i += 1) {
    const { question, answer: correctAnswer } = getQuestionAndAnswer();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
