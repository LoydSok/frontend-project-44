import readlineSync from 'readline-sync';

// Предикат для проверки на четность
const isEven = (num) => num % 2 === 0;

export const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    // Генерация случайного числа от 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    // Определяем правильный ответ на основе нашего предиката
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // Завершаем игру при ошибке
    }

    console.log('Correct!');
  }

  // Если цикл успешно завершился 3 раза
  console.log(`Congratulations, ${name}!`);
};