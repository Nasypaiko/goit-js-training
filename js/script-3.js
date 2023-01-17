// Объект Math
// Возведение в степень
// Exponent operator

// console.log(Math);

const first = 2;
const second = 5;

const result = Math.pow(2, 3);

console.log(result);

const base = 2;
const power = 5;

console.log(Math.pow(base, power));

console.log(2 ** 5);

// Math.sqrt()

// Напиши скрипт который просит пользователя ввести число и степень,
// возводит число в эту степень и выводит результат в консоль

// 1. попросить ввести число и сохранить в переменную

let bases = prompt('Введите число');
bases = Number(bases);
console.log(bases);

// 2. попросить ввести степень и сохранить в переменную

let powers = prompt('Введите степень');
powers = Number(powers);
console.log(powers)

// 3. возвести введённые данные в степень и вывести

const results = bases ** powers;
console.log(results);

// Генерим псевдослучайные числа
// Math.random()
// Math.round()

console.log(Math.random());

// Math.random() * (max - min) + min;

const max = 100;
const min = 0;
const resultat = Math.round(Math.random() * (max - min) + min);
console.log(resultat);

// --- Задача ---

const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
const maxs = colors.length - 1;
const mins = 0;
const index = Math.round(Math. random() * (maxs- mins) + min);
const color = colors[index];
console.log(color);
// document.body.style.backgroundColor = color;

