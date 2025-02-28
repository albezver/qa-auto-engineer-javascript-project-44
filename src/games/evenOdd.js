#!/usr/bin/env node
import readlineSync from 'readline-sync';

const defineEvenOdd = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let generatedQuestion = Math.floor(Math.random() * 100); 

    let correctAnswer;
    if (generatedQuestion % 2 === 0) {
        correctAnswer = 'yes';
    } else {
        correctAnswer = 'no';
    };
    
    console.log(`Question: ${generatedQuestion}`);

    return { question: generatedQuestion, answer: correctAnswer };
};

export { defineEvenOdd };