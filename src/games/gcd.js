import runGameEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

// Функция генерации случайного числа
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Алгоритм Евклида для поиска НОД
const getGcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  // Вопрос — это строка из двух чисел через пробел
  const question = `${num1} ${num2}`;
  
  // Считаем правильный ответ и приводим к строке
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

export default () => {
  runGameEngine(description, generateRound);
};