import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGameEngine = (gameDescription, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  
  console.log(gameDescription);

  for (let i = 0; i < roundsCount; i += 1) {
    // Получаем вопрос и правильный ответ из конкретной игры
    const [question, correctAnswer] = getRoundData();
    
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGameEngine;