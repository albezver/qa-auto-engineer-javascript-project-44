#!/usr/bin/env node
const completeProgression = () => {
  const description = 'What number is missing in the progression?';

  const getQuestionAndAnswer = () => {
    const minSeqLength = 5;
    const maxSeqLength = 10;
    const seqLength = Math.floor(Math.random() * (maxSeqLength - minSeqLength + 1)) + minSeqLength;

    const seqStep = Math.floor(Math.random() * 5) + 1;

    let initSeqNum = Math.floor(Math.random() * 100);
    const seqArr = [initSeqNum];

    for (let i = 1; i < seqLength; i += 1) {
      initSeqNum += seqStep;
      seqArr.push(initSeqNum);
    }

    const missedIndex = Math.floor(Math.random() * seqLength);
    const correctAnswer = seqArr[missedIndex];
    seqArr[missedIndex] = '..';

    const questionExpression = seqArr.join(' ');

    return { question: questionExpression, answer: String(correctAnswer) };
  };

  return { description, getQuestionAndAnswer };
};

export default completeProgression;
