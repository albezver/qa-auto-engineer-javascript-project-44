#!/usr/bin/env node
const isEven = (num) => num % 2 === 0;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const defineEvenOdd = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQuestionAndAnswer = () => {
    const generatedQuestion = Math.floor(Math.random() * 100);
    const evenAnswer = isEven(generatedQuestion) ? 'yes' : 'no';
    const primeStatus = isPrime(generatedQuestion) ? 'prime' : 'not prime';

    return {
      question: generatedQuestion,
      answer: `${evenAnswer}, ${primeStatus}`,
    };
  };

  return { description, getQuestionAndAnswer };
};

export default defineEvenOdd;
