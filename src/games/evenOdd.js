#!/usr/bin/env node
const defineEvenOdd = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const generatedQuestion = Math.floor(Math.random() * 100);

  let correctAnswer;
  if (generatedQuestion % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  console.log(`Question: ${generatedQuestion}`);

  return { question: generatedQuestion, answer: correctAnswer };
};

export default defineEvenOdd;
