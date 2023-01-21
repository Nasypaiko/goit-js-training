
// Переменные и типы примитивов
// const и let
// Логирование с методом console.log()
// Уникальность идентификатора

const age = 10;
const totalPrice = 200.74;
const userName = 'Chelsy';
const message = 'Добро пожаловать!';
const isOpen = true;
const shouldConfirm = false;

console.log('Цена', totalPrice);

console.log('5');

// Оператор typeof 

const type1 = typeof 'qwerty';
console.log(type1);

const type2 = typeof 5;
console.log(type2);

const type3 = typeof isOpen;
console.log(type3);

// Как window.alert() блокирует интерпретацию

console.log('До');
alert();
console.log('После');

// Ввод пользователя
// Методы window.confirm() и window.prompt()

const shouldRenew = confirm('Хотите продлить прописку?');
console.log(shouldRenew);

let quantity = prompt('Введите количество товаров');
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);


// Парс числа с Number.parseInt() и Number.parseFloat()

let elementWidth = '50px';
const result = Number.parseInt(elementWidth);
console.log(result);

let elementHeight = '200.74';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight: ', elementHeight);

// Метод число.toFixed(digits)

let salary = 1300.6543;
salary = Number(salary.toFixed(2));
// salary = Number(salary);
console.log(salary);

// Приведение (преобразование) к числу с Number(value)
// Значение NaN (Not a Number) и метод Number.isNaN(value)

let quantity = '30';
let value = 'Эту строку невозможно привести к числу';

console.log(Number(true));
console.log(Number(false));

console.log(Number(quantity));
console.log(Number(value));


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

// Приведение к булю на примере Boolean(value)


// --- Корисно
// Шість значень, які в булевому перетворенні приводяться до `false`:
// `0`, `NaN`, `null`, `undefined`, порожній рядок `""` або`''` 
// і саме значення`false`. Абсолютно все інше приводиться до`true`.



console.log(Boolean(5));
console.log(Boolean(0));

// Логическое И (оператор &&)

console.log(5 && 6 && 'hello')
console.log(0 && 6 && 'hello')

// Логическое ИЛИ (оператор ||)

console.log(5 || 6 || 8 || 10)
console.log(false || 0 || 8 || 10)

// Логическое НЕ (оператор !)

console.log(!false)



// Напишите скрипт который проверяет вхождение
// числа в отрезок обозначенный х1 и ×2

const x1 = 10;
const x2 = 30;
const number = 50;

// - До х1

console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);

// - После х2

console.log(`Число ${number} попадает в отрезок после ${x2}?`, number > x2);

// - От х1 до х2

const res = number > x1 && number < x2;
console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}?`, res);

// - До х1 или после х2

const result = number < x1 || number > x2;
console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}?`, result);



// Напишите скрипт который проверяет возможность открыть чат с пользователем.
// Для этого пользователь должен быть:
// - другом
// - онлайн
// - без режима не беспокоить

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Можно открыть чат?', canOpenChat);


// Напиши скрипт проверки подписки пользователя при доступе к контенту.
// - есть три типа подписки: free, pro и vip
// - получить доступ могут только пользователи pro и vip 

const sub = 'pro';

// если пользователь рго или пользователь уір тогда есть доступ

const canAccessContent = sub === 'pro' || sub === 'vip';
// true || false => true
console.log('Есть доступ к контенту?', canAccessContent);


// Оператор ветвления if

if (5 > 1) { console.log('выполняется') }
if (5 < 1) { console.log('не выполняется') }

// Оператор ветвления if...else

if (5 < 1) { console.log('выполняется') }
else { console.log('не выполняется') }

// Оператор ветвления else...if

const salary = 1500;

if (salary < 500) { console.log('Уровень 1'); } 
else if (salary > 500 && salary <= 1500) { console.log('Уровень 2'); }
else if (salary > 1500 && salary < 3000) { console.log('Уровень 3') }
else { console.log('Уровень 4')};



// Тернарный оператор

const balance = 1000;

// let message;

// if (balance >= 0) {
//     message = 'Позитивный баланс';
// } else {
//     message = 'Негативный баланс';
// }

const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

console.log(message);