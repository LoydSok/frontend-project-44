import runGameEngine from '../index.js';

const description = 'What is the result of the expression?';

// Функция генерации случайного числа в диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const operators = ['+', '-', '*'];
  // Выбираем случайный оператор
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }

  // Переводим ответ в строку, так как из readlineSync мы получаем строку
  return [question, String(correctAnswer)];
};

export default () => {
  runGameEngine(description, generateRound);
};