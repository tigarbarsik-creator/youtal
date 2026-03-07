
let currentYear = 2023;
let yearOfBirth = 2003;


let age = currentYear + yearOfBirth;

let message = `Тебе сейчас ${age} лет`;

console.log(message);
 
 
let first = 9
let second = 2
console.log(first % second);

let dedYearsOld= 36
let sonYearsOld=7
console.log(dedYearsOld - (sonYearsOld * 2));

let number = 123;
    let sum = number % 10;
    number /= 10;
    sum += number % 10;
    number /= 10;
    sum += number % 10;
    console.log(sum);
const poem = '\tЯ помню чудное мгновенье:\n Передо мной явилась ты,\n Как мимолетное виденье,\n Как гений чистой красоты';
    console.log(poem);
/* let example = "Что-то называется \"хорошо\", а что-то \"плохо\"";
console.log(example) */;
let example = "Он отвечает на вопросы да \\ нет";
console.log(example);
console.log(`Сумма переменных a и b равна ${1 + 2}`);
const name='Василий';
console.log (`Привет,${name}`);
const totalSeconds = 43200; // 12 часов в секундах

// Вычисляем количество полных часов
const hours = Math.floor(totalSeconds / 3600);

// Оставшиеся секунды после вычитания полных часов
const remainingSeconds = totalSeconds % 3600;

// Вычисляем количество полных минут из оставшихся секунд
const minutes = Math.floor(remainingSeconds / 60);

// Секунды — остаток после выделения минут
const seconds = remainingSeconds % 60;

// Функция для добавления ведущего нуля к числам < 10
function addLeadingZero(num) {
  if (num < 10) {
    return '0' + num; // если число меньше 10, добавляем '0' слева
  } else {
    return num; // если число 10 или больше, возвращаем как есть
  }
}

// Форматируем каждую часть времени
const formattedHours = addLeadingZero(hours);
const formattedMinutes = addLeadingZero(minutes);
const formattedSeconds = addLeadingZero(seconds);


// Формируем итоговую строку и выводим в консоль
console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);

const kitName = 'Батут';
const slogan = `При использовании нашего комплекта «${kitName}" ваши ракеты всегда будут возвращаться на Землю. «${kitName}" поможет экономить на производстве. «${kitName}" сократит вероятность падения ракеты в случайную точку.`;

console.log(slogan);
let email = "email";
  
   const dsfsdf=email[0]; 
   const dfgfgh=email.at(-1);
   
    console.log(`${dsfsdf},${dfgfgh}`);



document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!hamburger || !mobileMenu) {
    console.error('Ошибка: не найдены элементы hamburger-toggle или mobile-menu');
    return;
  }

  // Переключение меню при клике на бургер
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Закрытие меню при клике на ссылку
  document.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // Закрытие меню при клике вне его области
  document.addEventListener('click', function(e) {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});
