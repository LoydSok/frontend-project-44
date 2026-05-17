import runGameEngine from '../index.js';

const description = 'What number is missing in the progression?';

// Функция генерации случайного числа в диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция создания арифметической прогрессии
const makeProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  // Длина прогрессии от 5 до 10 элементов (как указано в условии)
  const length = getRandomNumber(5, 10);

  const progression = makeProgression(start, step, length);

  // Выбираем случайный индекс элемента, который спрячем
  const hiddenElementIndex = getRandomNumber(0, length - 1);

  // Сохраняем правильный ответ до того, как спрячем его
  const correctAnswer = String(progression[hiddenElementIndex]);

  // Заменяем выбранный элемент на две точки
  progression[hiddenElementIndex] = '..';

  // Превращаем массив в строку с пробелами для вопроса
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  runGameEngine(description, generateRound);
};