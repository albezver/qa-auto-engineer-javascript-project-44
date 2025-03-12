#!/usr/bin/env node
// Execute calculations
const calculate = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

const calculateNumbers = () => {
  const description = 'What is the result of the expression?';

  const getQuestionAndAnswer = () => {
    // Generate numbers and operator
    const firstNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    // Generate a question
    const question = `${firstNum} ${operator} ${secondNum}`;

    // Get calculated results from calculate()
    const answer = calculate(firstNum, secondNum, operator);

    return { question, answer: String(answer) };
  };

  return { description, getQuestionAndAnswer };
};

export default calculateNumbers;
