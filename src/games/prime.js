#!/usr/bin/env node
const isPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQuestionAndAnswer = () => {
    const question = Math.floor(Math.random() * 100);
    let answer = 'yes';

    if (question < 2) {
      answer = 'no';
    } else {
      for (let i = 2; i <= Math.sqrt(question); i += 1) {
        if (question % i === 0) {
          answer = 'no';
          break;
        }
      }
    }

    return { question, answer };
  };

  return { description, getQuestionAndAnswer };
};

export default isPrime;
