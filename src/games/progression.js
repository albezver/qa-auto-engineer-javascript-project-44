#!/usr/bin/env node
const completeProgression = () => {
  console.log('What number is missing in the progression?');
  const minSeqLength = 5;
  const maxSeqLength = 10;
  const seqLength = Math.floor(Math.random() * (maxSeqLength - minSeqLength + 1)) + minSeqLength;
      + minSeqLength;

  // Generate a sequence step
  const generateSecStep = () => {
    const seqStep = Math.floor(Math.random() * 5) + 1;
    return seqStep;
  };
  const seqStep = generateSecStep();

  // Initiate the sequence beginning
  let initSeqNum = Math.floor(Math.random() * 100);
  const seqArr = [initSeqNum];

  // Create the sequence
  for (let i = 1; i < seqLength; i += 1) {
    initSeqNum += seqStep;
    seqArr.push(initSeqNum);
  }

  // Generate the question to user
  const missedNum = Math.floor(Math.random() * seqLength); // Define a missing number
  const correctAnswer = seqArr[missedNum]; // Memorize the missing number
  seqArr[missedNum] = '..';
  const questionExpression = seqArr.join(' ');
  console.log(`Question: ${questionExpression}`);

  return { question: questionExpression, answer: String(correctAnswer) };
};

export default completeProgression;
