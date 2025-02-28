#!/usr/bin/env node
import readlineSync from 'readline-sync';

const calculateNumbers = () => {
    console.log('What is the result of the expression?');
      const firstNum = +Math.floor(Math.random() * 100).toString();
      const secondNum = +Math.floor(Math.random() * 100).toString();
      const operators = ["+", "-", "*"];
      const randomOperator =
        operators[Math.floor(Math.random() * operators.length)];
        
        const questionExpression = `${firstNum} ${randomOperator} ${secondNum}`;
      
        let correctAnswer;
        if (randomOperator === '+') {
        correctAnswer = firstNum + secondNum;
      } else if (randomOperator === '-') {
        correctAnswer = firstNum - secondNum;
      } else if (randomOperator === '*') {
        correctAnswer = firstNum * secondNum;
      }

      console.log(`Question: ${questionExpression}`);

      return { question: questionExpression, answer: String(correctAnswer) };
  };

  export { calculateNumbers };