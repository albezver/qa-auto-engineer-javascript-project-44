#!/usr/bin/env node
const isPrime = () => {
    console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);
    const generatedQuestion = Math.floor(Math.random() * 100);
    console.log(`Question: ${generatedQuestion}`);
    // Define correct answer
    let correctAnswer = 'yes'; 

    // Validate if the answer if correct
    if (generatedQuestion < 2) {
        correctAnswer = 'no';
    } else {
        for (let i = 2; i <= Math.sqrt(generatedQuestion); i += 1) {
            if (generatedQuestion % i === 0) {
                correctAnswer = 'no';
            }
        }
    }

    return { question: generatedQuestion, answer: correctAnswer };
};

export default isPrime;