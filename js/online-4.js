/*
  1. Коллбек функції
  - Визначення та призначення
  Напишіть такі функції:
  handleProduct(productData, callback) - приймає об'єкт товару, а 
  також коллбек. Функція викликає коллбек передаючи йому 
  об'єкт 
  logProduct(product) - коллбек, що приймає об'єкт товару і логує 
  його у консоль 
  logTotalPrice(product) - коллбек, що приймає об'єкт товару і 
  логує загальну вартість товару в консоль
  Об'єкт товару має поля name, quantity та price
  - Показати в якому порядку викликаються функції
*/

// function handleProduct(product, callback) {
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// handleProduct(
//   {
//     name: '🍋',
//     price: 20,
//     quantity: 5,
//   },
//   logTotalPrice
// );

// handleProduct(
//   {
//     name: '🍎',
//     price: 30,
//     quantity: 3,
//   },
//   logProduct
// );

/* 
  2. Коллбек функції
  Додайте об'єкту account методи:
  withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError) 
  де перший параметр це сума операції, а другий і третій - коллбеки,
  які приймають текст повідомлення на успіх або помилку
  Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT 
  або this.balance, в іншому випадку випадку викликає onSuccess та
  зменшує баланс на переданий amount
  Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT 
  або меньше або дорівнює нулю, в іншому випадку випадку викликає onSuccess
  та збільшує баланс на переданий amount
*/

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   firstname: 'Andrii',
//   lastname: 'Shevchuk',
//   balance: 618,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(
//         `Cума зняття є більшою за ліміт транзакцій, залишок - ${this.balance}`
//       );
//     } else if (amount > this.balance) {
//       onError(
//         `Cума зняття є більшою ніж є на балансі, залишок - ${this.balance}`
//       );
//     } else {
//       this.balance -= amount;

//       onSuccess(`Операція зняття відбулась успішно, залишок - ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(
//         `Cума поповнення є більшою за ліміт транзакцій, залишок - ${this.balance}`
//       );
//     } else if (amount <= 0) {
//       onError(
//         `Cума поповнення є меншою або рівна нулю, залишок - ${this.balance}`
//       );
//     } else {
//       this.balance += amount;

//       onSuccess(`Поповнення відбулось успішно, залишок - ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(400, handleSuccess, handleError);
// account.withdraw(400, handleSuccess, handleError);
// account.withdraw(6000, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

/*
  3. Коллбек функції
  Напишіть функцію each(array, callback), яка першим параметром очікує масив
  чисел, а другим - коллбек, який застосовується до кожного елемента масиву
  Функція each повинна повернути новий масив, елементами якого будуть 
  результати виклику коллбеку
*/

// function each(array, callback) {
//   const resultArray = [];

//   for (let number of array) {
//     const newValue = callback(number);

//     resultArray.push(newValue);
//   }

//   return resultArray;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

/*
  4. Стрілочні функції
  - Для чого були вигадані
  - Синтаксис залежно від кількості параметрів
  - Явне/неявне повернення
  - Різниця з function declaration (відсутність arguments та сплиття)
  Перепишіть функцію getSum, слідуючи синтаксису стрілочних функцій
*/

// function getSum1(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }

// const getSum2 = function (firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// };

// const getSum3 = (firstNumber, secondNumber) => {
//   return firstNumber + secondNumber;
// };

// const getSum4 = (firstNumber, secondNumber) => firstNumber + secondNumber;

// console.log(getSum3(5353, 434));

// const sayHi = () => {
//   console.log('аівавіфвіфвф');
// };

// sayHi();

/*
  5. Стрілочні функції
  
  Перепишіть функції, слідуючи синтаксису стрілочних функцій
*/

// const handleProduct = (productData, callback) => {
//   callback(productData);
// };

// const logProduct = (product) => {
//   console.log(product);
// };

// const logTotalPrice = ({ price, quantity }) => {
//   console.log(price * quantity);
// };

// handleProduct(
//   {
//     name: '🍎',
//     price: 30,
//     quantity: 3,
//   },
//   logProduct
// );

// handleProduct(
//   {
//     name: '🍋',
//     price: 20,
//     quantity: 5,
//   },
//   logTotalPrice
// );

/*
  6. Стрілочні функції
  
  Перепишіть функції, слідуючи синтаксису стрілочних функцій
*/

// const each = (array, callback) => {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));

// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));

// console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

/*
  7. Метод forEach
  - Призначення
  - Сигнатура
  
  Перепишіть функцію, використовуючи метод forEach та стрілочні функції
*/

// function logItems(items) {
//   // for (let index = 0; index < items.length; index += 1) {
//   //   console.log(`${index + 1} - ${items[index]}`);
//   // }

//   items.forEach((element, index) => {
//     console.log(`${index + 1} - ${element}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
  8. Метод forEach
  
  Перепишіть функцію, використовуючи метод forEach та стрілочні функції
*/

// const printContactsInfo = ({ phones, names }) => {
//   const namesArray = names.split(',');
//   const phonesArray = phones.split(',');

//   // for (let i = 0; i < namesArray.length; i += 1) {
//   //   console.log(`${namesArray[i]}: ${phonesArray[i]}`);
//   // }

//   console.log(namesArray);

//   namesArray.forEach((name, i) => {
//     console.log(`${name} - ${phonesArray[i]}`);
//   });
// };

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artem',
//   phones: '89001234567,89001112233,890055566377, 890055558379',
// });

/*
  9. Метод forEach
  Перепишіть функцію, використовуючи метод forEach та стрілочні функції
*/

// const calculateAverage = (...args) => {
//   let total = 0;

//   // for (let number of args) {
//   //   total += number;
//   // }

//   args.forEach((number) => {
//     total += number;
//   });

//   return total / args.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// сори что не по теме. почему результат 7? если 7*6 это строка..

// (value => value > 3);

// const numbers = [1, 2, 3, 4, 5];

// const filteredNumbers = numbers.filter(value => value > 3);

// console.log(filteredNumbers); // [4, 5]








// ------------ Урок 2 ------------









// Колекція об'єктів для всіх прикладів з автомобілями

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/*
  1. Метод map
  Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів
*/

// const getModels = (arr) => arr.map((el) => el.model);

// console.log(cars);
// console.log(getModels(cars));

/*
  2. Метод map
  Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінeнним 
  значенням властивості price залежно від переданої знижки
*/

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((auto) => ({ ...auto, price: auto.price - discount }));
// };

// console.table(cars);
// console.table(makeCarsWithDiscount(cars, 2000));

/*
  3. Метод filter
  
  Нехай функція filterByPrice повертає масив автомобілів ціна яких менша за 
  значення параметра threshold
*/

// const filterByPrice = (cars, threshold) => {
//   const result = cars.filter((auto) => auto.price < threshold);

//   return result
// };

// console.table(cars);
// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/*
  4. Метод filter
  Нехай функція getCarsOnSale повертає масив автомобілів властивість onSale яких true
*/

// const getCarsOnSale = (cars) => cars.filter((auto) => auto.onSale);

// console.table(cars);
// console.table(getCarsOnSale(cars));

/*
  5. Метод filter
  Нехай функція getCarsWithType повертає масив автомобілів, тип яких збігається 
  зі значенням параметра type
*/

// const getCarsWithType = (cars, type) =>
//   cars.filter((auto) => auto.type === type);

// console.table(cars);
// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

/*
  6. Метод find
  Нехай функція getCarByModel повертає об'єкт автомобіля властивість model
  якого та параметр model однакові
*/

// const getCarByModel = (cars, model) =>
//   cars.find((auto) => auto.model === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

/*
  7. Метод sort
  
  Нехай функція sortByAscendingAmount повертає НОВИЙ масив автомобілів відсортований 
  за збільшенням значення властивості amount
*/

// const sortByAscendingAmount = (cars) =>
//   cars.slice().sort((a, b) => a.amount - b.amount);

// console.table(cars);
// console.table(sortByAscendingAmount(cars));

// const numbers = [1, 2, 100, 50, 4];

// numbers.sort((a, b) => a - b);

// console.log(numbers);

/*
  8. Метод sort
  Нехай функція sortByModel повертає НОВИЙ масив автомобілів відсортований за назвою 
  моделі в алфавітному або зворотньому алфавітному порядку, залежно від значення параметра order
  - localeCompare
*/

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) => {
//     if (order === 'asc') {
//       return a.model.localeCompare(b.model);
//     }

//     return b.model.localeCompare(a.model);
//   });

// console.table(cars);
// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

/*
  9. Метод reduce
  Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount)
*/

// const getTotalAmount = (cars) => cars.reduce((acc, el) => el.amount + acc);

// console.log(getTotalAmount(cars));

/*
  10. Ланцюжки методів
  
  Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, що зараз на розпродажі.
*/

// const getAvailableCarNames = (cars) =>
//   cars.filter((auto) => auto.onSale).map((auto) => auto.model);

// console.log(getAvailableCarNames(cars));

// const mazdaCars = cars.reduce(
//   (acc, el) => (el.make === 'Mazda' ? acc + el.amount : acc),
//   0
// );

// console.table(mazdaCars);