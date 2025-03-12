#!/usr/bin/env node
const calculateGCD = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const defineGCD = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const getQuestionAndAnswer = () => {
    const firstNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 100);

    const question = `${firstNum} ${secondNum}`;

    const correctAnswer = calculateGCD(firstNum, secondNum);

    return { question, answer: String(correctAnswer) };
  };

  return { description, getQuestionAndAnswer };
};

export default defineGCD;
