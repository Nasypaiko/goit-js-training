// ------------ Урок 1 ------------



/*
  1. Основи об'єктів:
  
  - Призначення
  - Створення об'єктів
  - Формат зберігання даних
  - Додавання та зміна властивостей (різниця між . та [])
  - Перебір for...in
*/

// const user = {
//   language: 'ukrainian',
//   age: 27,
//   name: 'Andrii',
//   isStudent: false,
//   friends: [`Andrii`, `Olya`],
// };

// console.log(user);

// user.eyeColor = 'blue';

// let key = 'gender';

// key = 'sex';

// user.key = 'male';

// console.log(user);

// for (let key in user) {
//   console.log(key);
// }

// const color = 'black';

// const auto = {
//   mark: 'Honda',
//   color,
//   hasWheels: true,
// };

// console.log(auto);

/*
  2. Напиши скрипт, який для об'єкта user послідовно:
  
  - Додає поле mood зі значенням 'happy'
  - Замінює значення hobby на 'skydiving'
  - Замінює значення premium на false
  - Виводить вміст об'єкта user у форматі ключ: значення,
*/

// const user = {
//   gender: 'male',
// };

// user.mood = 'happy';

// user.hobby = 'skydiving';

// user['premium'] = false;

// console.log(user);

// user.b = {
//   d: 424,
// };

// const valuesFromUser = Object.values(user);

// console.log(valuesFromUser);

// for (let element of valuesFromUser) {
//   console.log(element);
// }

/*
  3. Метод Object.values()
  Є об'єкт, де зберігаються зарплати нашої команли. Напиши
  Функцію getResult для підсумовування усіх зарплат.
  Функція повинна отримувати об'єкт з інформацію про зарплати та
  повертати загальну їх суму.
  Якщо об'єкт salaries порожній, результат має бути 0 
*/

// const salaries = {
//   Andrii: 3000,
//   Anna: 1200,
//   Sofiya: 2000,
// };

// function getResult(salariesObj) {
//   // 1 variant
//   // const arrayOfValues = Object.values(salariesObj);

//   // let total = 0;

//   // for (let salary of arrayOfValues) {
//   //   total += salary;
//   // }

//   // return total;

//   //2 variant

//   let total = 0;

//   for (let key in salariesObj) {
//     total += salariesObj[key];
//   }

//   return total
// }

// const result = getResult(salaries);

// console.log(result);

/*
  4. Масив об'єктів
  Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає
  масив об'єктів та рядок з назвою каменю. 
  
  Функція рахує і повертає загальну вартість каміння з таким ім'ям, 
  ціною та кількістю з об'єкта
*/

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Топаз', price: 500, quantity: 10 },
//   { name: 'Аквамарин', price: 200, quantity: 8 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (let stoneObj of stones) {
//     if (stoneObj.name === stoneName) {
//       return stoneObj.price * stoneObj.quantity;
//     }
//   }

//   return 'Такого каменю не знайдено';
// }

// const totalPrice = calcTotalPrice(stones, 'ававіваі');

// console.log(totalPrice);

/*
  5. Методи об'єкта
  
  Напиши скрипт управління особистим кабінетом інтернет-банку.
  
  Є об'єкт account, в якому необхідно реалізувати методи для роботи
  з балансом та історією транзакцій
*/

// Типів транзакцій лише два:
// Можна покзасти чи зняти гроші з рахунку

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Исторія транзакцій
  transactions: [],

  /*
    Метод createTransaction створює та повертає об'єкт транзакції.
    Приймає суму та тип транзакції.
  */

  createTransaction(amount, type) {
    // console.log(this);

    const transaction = { amount, type, id: this.transactions.length };

    return transaction;
  },

  // getBalance() {},

  // getBalance: function () {}

  /*
    Метод deposit, що відповідає за додавання суми до балансу
    Приймає суму транзакції
    Викликає createTransaction для створення об'єкта транзакції
    та додавання його в історію транзакцій
  */

  deposit(amount) {
    this.balance += amount;

    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

    this.transactions.push(transaction);
  },

  /*
    Метод withdraw, що відповідає за зняття суми з балансу.
    Приймає суму транзакції
    Якщо сума зняття більша за поточний баланс, виводь повідомлення
    про те, що зняття такої суми не можливо - недостатнє коштів
    
    Викликає createTransaction для створення об'єкта транзакції
    та додавання його в історію транзакцій.
  */

  // withdraw(amount) {
  //   if (amount > this.balance) {
  //     console.log(`зняття ${amount} не можливе - недостатньо коштів`);
  //   } else {
  //     this.balance -= amount;

  //     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

  //     this.transactions.push(transaction);
  //   }
  // },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`зняття ${amount} не можливе - недостатньо коштів`);
      return;
    }

    this.balance -= amount;

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

    this.transactions.push(transaction);
  },
};

// console.log(account);

// account.deposit(10000);

// account.deposit(50000);

// account.withdraw(30000);

// account.withdraw(45000);

// console.log(account);

// const user = {
//   gender: 'male',
//   age: 25,
//   name: 'Vitaliy',
// };

// const keysArray = Object.keys(user);
// const valuesArray = Object.values(user);
// const entriesArray = Object.entries(user);

// console.log(keysArray);
// console.log(valuesArray);
// console.log(entriesArray);

//---------------------------

// const user = {
//   isPremium: false,
//   'o c cu pa tion': 'It Specialist',
// };

// console.log(user);

// const book = {
//   title: 'The last kingdom',
//   showTitle() {
//     console.log(this.title);
//   },
// };

// book.showTitle();

// const propKey = 'title';
// const bookTitle = book[propKey];
// console.log(bookTitle);

// поясніть на коді використання this і покрокове написання коду

// const playlist = {
//   name: 'my super playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-1', 'track-1'],
//   trackCount: 3,
//   changeName(newName) {
//     // використовую this
//     console.log('this inside changeName: ', this);
//     this.name = newName;
//   },
//   addTracks(track) {
//     console.log('some new track: ', this);
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//     console.log('new rating:', this);
//     // newRating = this.rating;
//   },
// };
// playlist.changeName('New name');

// playlist.addTracks('New Track');

// playlist.updateRating('New rating');

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const values = [];

//   for (let product of products) {
//     if (product[propName]) {
//       values.push(product[propName]);
//     }
//   }

//   return values;
// }

// console.log(getAllPropValues('namefdsfds'));

// const allProducts = [
//   { icon: '🍏', name: 'green apple', price: 15 },
//   { icon: '🍎', name: 'apple', price: 20 },
//   { icon: '🍐', name: 'pear', price: 25 },
//   { icon: '🍊', name: 'orange', price: 35 },
//   { icon: '🍋', name: 'lemon', price: 30 },
//   { icon: '🍌', name: 'banana', price: 40 },
//   { icon: '🍉', name: 'watermelon', price: 30 },
//   { icon: '🍇', name: 'vine', price: 25 },
//   { icon: '🍒', name: 'strawberry', price: 30 },
//   { icon: '🍑', name: 'peech', price: 50 },
//   { icon: '🥥', name: 'coconut', price: 70 },
// ];

// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     for (let element of allProducts) {
//       if (element.name === product || element.icon === product) {
//         this.items.push(element);
//         this.items[`${element.quantity}`] = 1;
//       }
//     }
//   },
// };

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let arr = [];
//   for (let product of products) {
//     let keys = Object.keys(product);
//     for (let key of keys) {
//       if (key === propName) {
//         arr.push(product[key]);
//       }
//     }
//   }
//   return arr;
// }





// ------------ Урок 2 ------------






/*
  1. Операція spread як заміна concat і slice
*/

//*  Копія масиву

// const array = [1, 2, 3, 4, 5];

// const newArray = array.concat()

// const newArray = [...array];

// console.log(newArray);

// console.log(newArray === array);

//* Об'єднання масивів через spread замість concat

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9];

// const allElements = array1.concat(array2);

// const allElementsArr = [...array1, ...array2];

// console.log(allElementsArr);

/*
  2. Копія об'єкту
  - Перезапис однакових ключів при копіюванні
*/

// const user = {
//   firstName: 'Andrii',
//   lastName: 'Shevchuk',
//   age: 30,
// };

// const user2 = { ...user, hobbies: [] };

// console.log(user2);
// console.log(user === user2);

/*
  3. Spread + Rest
  Напишіть функцію getMinNumber яка приймає довільну кількість чисел
  та повертає найменше із них
*/

// function getMinNumber(...args) {
//   // console.log(arguments);
//   // console.log(args);

//   return Math.min(...args);
// }

// const minNumber = getMinNumber(1, 300, 5);

// console.log(minNumber);

/*
/*
  4. Деструктуризація об'єктів, які проблеми вирішує
  Напишіть деструктуризуюче присвоювання, яке:
  властивість firstName присвоїть у змінну firstName
  властивість age присвоїть у змінну userAge
  властивість isAdmin присвоїть у змінну isAdmin (false, по дефолту
  якщо, у об'єкта данної властивості не буде)
  всі інші властивості зібрати у об'єкт features
*/

// const user = {
//   firstName: 'Andrii',
//   lastName: 'Shevchuk',
//   age: 30,
//   eyeColor: 'green',
//   hobbies: [],
// };

// const {
//   firstName,
//   age: userAge,
//   isAdmin: isPremium = false,
//   lastName,
//   ...features
// } = user;

// console.log(firstName, userAge, isPremium);

// console.log(features);

// const data = {
//   username: 'Olya',
//   'hobbies-array': [],
// };

// const { hobbies_array: hobbiesArray, 'hobbies-array': hobbies } = data;

/*
  5. Глубока деструктуризація об'єктів
  Потрібно дістати значення усіх властивостей, включно
  з вкладеними у об'єкт langs
*/

// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// const {
//   langs: { original, secondary },
//   flag,
//   employees,
//   number,
// } = team;

// console.log(number, flag, employees, original, secondary);

/*
  6. Деструктуризація масивів
*/

/*
  Дістати перший та третій елементи масиву, всі інші після 
  третього занести в окремий масив
*/

// const names = [
//   'Herbert Todd',
//   'Belle Soto',
//   'Roger Marsh',
//   'Ethan Lindsey',
//   'Leo Dicaprio',
//   'Arnold Polo',
// ];

// const [first, , third, ...others] = names;

// console.log(first);
// console.log(third);
// console.log(others);

/*
  Дістати значення кольорів та властивість alpha
*/

// const rgb = [0, 255, 34, 0.5];

// const [red, green, blue, alpha = 1] = rgb;

// console.log(red);
// console.log(green);
// console.log(blue);

// console.log(alpha);

/*
  У нас є об'єкт salaries з зарплатами
  Створіть функцію topSalary(salaries), яка повертає ім'я найбільш
  високооплачуваного працівника
  Якщо об'єкт salaries пустий то повернути null
  Якщо декілька людей з одною тою самою зарплатою є найбільш високооплачуваними, 
  можна повернути будь-якого з них
 
  Використовуйте Object.entries та деструктуризацію, щоб перебрати пари ключ/значение.
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(salaries) {
//   const entries = Object.entries(salaries);

//   // console.log(entries);

//   if (entries.length === 0) {
//     return null;
//   }

//   let topPaidEmployee = '';
//   let topSalary = 0;

//   // Normal case
//   // for (let entry of entries) {
//   //   if (topSalary < entry[1]) {
//   //     topSalary = entry[1];
//   //     topPaidEmployee = entry[0];
//   //   }
//   // }

//   for (let [name, salary] of entries) {
//     if (topSalary < salary) {
//       topSalary = salary;
//       topPaidEmployee = name;
//     }
//   }

//   return topPaidEmployee;
// }

// console.log(topSalary(salaries));

/*
  7. Паттерн 'об'єкт параметрів', яку проблему вирішує
  Перепишіть функцію sayHi, щоб вона відповідала заданому паттерну
*/

// function sayHi(name, age, height, weight) {
//   console.log(
//     `Hi, ${name}! Your age is ${age}, your heigth is ${height}, your weight is ${weight}`
//   );
// }

// function sayHi(props) {
//   const { name, age, height, weight } = props;

//   console.log(
//     `Hi, ${name}! Your age is ${age}, your heigth is ${height}, your weight is ${weight}`
//   );
// }

// function sayHi({ name, age, height, weight }) {
//   console.log(
//     `Hi, ${name}! Your age is ${age}, your heigth is ${height}, your weight is ${weight}`
//   );
// }

// const props = {
//   name: 'Olya',
//   weight: 55,
//   age: 55,
//   height: 160,
// };

// sayHi(props);

// const arr = [1, 2, 3];

// const obj = {
//   length: 0,
//   0: 12,
// };

// console.log(arr);
// console.log(obj);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   let allPropValues = [];
//   for (const product of products) {

//     if (propName in product)
//     allPropValues.push(product[propName]);
//     return allPropValues;
//   }
//   //зробив із перевіркою, щоб отримати пустий масив, бо не міг отримати його в попередньому варіанті, в той же час не розумію чому?
//   for (const product of products) {
//     allPropValues.push(product[propName]);
//     if (!Object.keys(product).includes(propName)) {
//       return (allPropValues = []);
//     }
//   }
// }

// const salaries = {
//   Andrii: 3000,
//   Anna: 1200,
//   Sofiya: 2000,
// };

// function getResult(salaries) {
//   // 1 variant
//   // const arrayOfValues = Object.values(salariesObj);

//   // let total = 0;

//   // for (let salary of arrayOfValues) {
//   //   total += salary;
//   // }

//   // return total;

//   //2 variant

//   let total = 0;

//   for (let key in salariesObj) {
//     total += salariesObj[key];
//   }

//   return total;
// }

// const result = getResult(salaries);

// console.log(result);