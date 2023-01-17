// --- Онлайн лекция

const value = 27.5;

const ceil = Math.ceil (value);
const floor = Math.floor (value);
const round = Math.round(value);

console.log(ceil, floor, round);

// --- Задача

// Напиши скрипт, який розраховує індекс маси тіла людини.
// Для цього потрібно розділити вагу в кілограмах на квадрат висоти у метрах.
// Вага та висота зберігаються в змінних weight i height, але не як числа,
// а у вигляді рядків(спеціально для завдання).
// Нецілі числа можуть бути задані у вигляді 24.7 або 24, 7 
// тобто як роздільник дробної частини числа може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після коми.

let weight = "88,3";
let height = "1.98";

const numericWeight = Number.parseFloat(weight.replace(",", "."));
const numericHeight = Number.parseFloat(height.replace(",", "."));

console.log(numericWeight);
console.log(numericHeight);

const bmi = numericWeight / numericHeight ** 2;

console.log(bmi);

// console.log(Math.floor(bmi * 10) / 10);

console.log(Number(bmi.toFixed(1)));