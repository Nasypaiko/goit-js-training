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
