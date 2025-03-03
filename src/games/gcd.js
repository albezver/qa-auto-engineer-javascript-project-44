const defineGCD = () => {
  // Game description
  console.log('Find the greatest common divisor of given numbers.');

  // Generate numbers for the question
  const firstNum = Math.floor(Math.random() * 100);
  const secondNum = Math.floor(Math.random() * 100);

  // Print the question in the console
  const questionExpression = `${firstNum} ${secondNum}`;
  console.log(`Question: ${questionExpression}`);

  // Calculate the greatest common divisor
  const calculateGCD = (biggerNum, smallerNum) => {
    let a = biggerNum;
    let b = smallerNum;

    while (b !== 0) {
      const num = b;
      b = a % b;
      a = num;
    }
    return a;
  };

  // Save the calculated answer in the variable
  const correctAnswer = calculateGCD(firstNum, secondNum);

  return { question: questionExpression, answer: String(correctAnswer) };
};

export default defineGCD;
