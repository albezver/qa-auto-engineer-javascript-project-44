#!/usr/bin/env node
const isPrimeNumber = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQuestionAndAnswer = () => {
    const question = Math.floor(Math.random() * 100);
    const answer = isPrimeNumber(question) ? 'yes' : 'no';

    return { question, answer };
  };

  return { description, getQuestionAndAnswer };
};

export default isPrime;
