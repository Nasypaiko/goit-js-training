// Длина строки, свойство length 

const message = 'В этой строке 26 символов.';
console.log(message.length);

// Конкатенация строк

const firstName = 'Chealsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

console.log(5 + '5');

// Напиши скрипт который виведет строку в формате:
// «Гость х у поселяется в z номер q», 
// подставив вместо х у z q значения переменных

const room = 716;
const type = 'VIP';

const welcomeMsg =
  "Гость " +
  firstName +
  " " +
  lastName +
  " поселяется в " +
  type +
  " номер " +
  room;

console.log(welcomeMsg);

// Шаблонные строки (template strings)

const quantitys = 10;
const orderMsg = `Вы заказали ${quantitys} холодильников.`;
console.log(orderMsg);

// Нормализация с методом toLowerCase()

const brand = 'Samsung';
const normalizedBrand = brand.toLowerCase();
const inDb = 'samsung';
console.log(normalizedBrand);

let brands = 'samSUnG';
console.log(brands[4]);
console.log(brands.slice(1).toLowerCase());
brands = brands[0] + brands.slice(1).toLowerCase();
console.log(brands);

// Поиск в строке с методом includes()

const blacklistedWord1 = 'спам'; 
const blacklistedWord2 = 'распродажа';
const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная компания #fatlivesmatter';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));
console.log(string2.toLowerCase().includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));

// Запомните 6 ложных (falsy) значений, приводящихся к false в логическом
// преобразовании: 0, NaN, null, undefined, пустая строка: "" или '', false.
// Абсолютно все остальное приводится к true.

console.log(Boolean(5));
console.log(Boolean(0));

