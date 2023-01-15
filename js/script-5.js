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