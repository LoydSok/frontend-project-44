import runGameEngine from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Функция генерации случайного числа в диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Предикат для проверки, является ли число простым
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  
  // Проверяем делители от 2 до квадратного корня из num
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = String(randomNumber);
  
  // Определяем правильный ответ на основе предиката
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  runGameEngine(description, generateRound);
};