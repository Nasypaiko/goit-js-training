// --- Урок 1


// https://www.codewars.com/join?language=javascript
// ---------------Kahoot---------//

// const array = [`string`, 4848, Boolean, undefined];

// console.log(array);

// Мутабельні та імутабельні типи даних
// https://developer.mozilla.org/en-US/docs/Glossary/Mutable

// const clients = ["Mango", "Poly", "Ajax"];
// const string = "script";

// console.log(string[1]);

// // Імутабельні
// string[0] = "q";

// console.log(string);

// // Мутабельні

// clients[0] = "Andrii";

// clients.splice(1, 1);
// console.log(clients);

// За посиланням
// Складні (якщо говорити правильно то тільки Object)
//  Object
//  Array

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// arr2[0] = 10;

// console.log(arr1);
// console.log(arr2);

// console.log(arr1 === arr2);

// console.log(typeof arr1);

// За значенням
// Примітивні
// String
// Number
// Boolean
// null
// undefined

// let a = 10;

// let b = a;

// b = 5;

// console.log(a);
// console.log(b);

/*
  Example 1 - Базові операції з масивом
  [] літерал масиву
  Властивість length та індексація
  
  Створіть масив genres з елементами Jazz і Blues
  Додайте 'Rock&roll' у кінець масиву
  Виведіть у консоль перший елемент масиву
  Виведіть у консоль останній елемент масиву. 
  Код має працювати для масиву довільної довжини.
  Вставте 'Contry' та 'Reggie' на початок масиву
  Подивиттсь методи push unshift shift splice
*/

// const genres = ["Jazz", "Blues"];

// genres[2] = "Rock&roll";

// genres.push("Rock&roll");

// console.log(genres[0]);

// console.log(genres);

// console.log(genres.length);

// console.log(genres[genres.length - 1]);

// genres.unshift("Contry", "Reggie");

// console.log(genres);

/*  
  Example 2 - Масиви та рядки
  Напиши скрипт для обчислення площі прямокутника зі сторонами, 
  значення яких зберігаються в змінній величин у вигляді рядка.
  Значення гарантовано розділені пробілом. 
  Метод split
*/

// const values = "8 11";

// const array = values.split(" ");

// const square = array[0] * array[1];

// console.log(square);

/*
  Example 3 - Перебір масиву
  Напиши скрипт для перебору масиву fruits циклом for.
  Для кожного елемента масиву виведіть у консоль рядок у 
  форматі номер_елемента: значення_елемента. 
  
  Нумерація елементів має починатися з першого.
*/

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let index = 0; index < fruits.length; index += 1) {
//   console.log(`${index + 1}: ${fruits[index]}`);
// }

/*
  Example 4 - Масиви та цикли
  Напиши скрипт, який виводить у консоль ім'я та телефонний 
  номер користувача. У змінних names і phones зберігаються 
  рядки імен та телефонних номерів, розділені комами. 
  
  Порядковий номер імен та телефонів у рядках вказують на 
  відповідність. Кількість імен та телефонів гарантовано однакова.
  Метод split
*/

// const names = "Jacob,William,Solomon,Kate";
// const phones = "38001234567,38001112233,380055566377,38099912233";

// const namesArray = names.split(",");

// const phonesArray = phones.split(",");

// console.log(namesArray);
// console.log(phonesArray);

// for (let index = 0; index < namesArray.length; index += 1) {
//   console.log(`${namesArray[index]} - ${phonesArray[index]}`);
// }

/*
  Example 5 - Масиви та рядки
  Напиши скрипт який виводить у консоль усі слова рядка крім першого 
  та останнього. Результуючий рядок не повинен починатися або закінчуватися 
  пробілом. Скрипт повинен працювати для будь-якого рядка.
  методи pop shift join
*/

// const stringEl = "Welcome to the future";

// const array = stringEl.split(" ");

// console.log(array);

// array.pop();

// array.shift();

// const newString = array.join(" ");

// console.log(newString);

// console.log(array);

/*
  Example 6 - Масиви та рядки
  Напиши скрипт, який «розвертає» рядок (зворотній порядок літер)
  і виводить його в консоль.
  Методи split reverse join
*/

// Variant with words
// const string = "Welcome to the future";

// const array = string.split(" ");

// console.log(array);

// array.reverse();

// const newString = array.join(" ");

// console.log(newString);

// Variant with letters

// const string = "Welcome to the future";

// let newString = "";

// for (let index = 0; index < string.length; index += 1) {
//   // 1 iteration - W, ""
//   // 2 iteration - e, "W"
//   // 3 iteration - l, "eW"
//   // final result - `lew`

//   newString = string[index] + newString;
// }

// console.log(newString);

// const stringEl = `dadasdasdas`;

// const newStringEl = string[0].toUpperCase() + stringEl.slice(1);

// console.log(newStringEl);

/*
  Example 7 - Пошук елемента
  Напиши скрипт пошуку найменшого числа у масиві. 
  Код має працювати для будь-якого масиву чисел. 
  Використовуй цикл for of для розв'язання задачі.
*/

// const numbers = [100, 120, 10, Infinity];

// let minNumber = Infinity;

// for (let el of numbers) {
//   // 1 iteration: minNumber - Infinity, el - 100
//   // 2 iteration: minNumber - 100, el -5
//   // 3 iteation: minNumber -5, el - 2

//   if (el < minNumber) {
//     minNumber = el;
//   }
// }

// console.log(minNumber);

// const array = [1, 2, 3, 4, 5, 6];

// console.log(array.slice(1, 3));

// const fruit = "cherry";

// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const array = [1, 2, 3, 4, 5];

// array.splice(3, 1, 6);

// console.log(array);

// const colors = ["red", `blue`, `green`];

// colors.splice(2, 1, "purple");

// console.log(colors);

// const array = [1, 2, 4];

// console.log(array[array.length - 1]);

// const array = [1, 2, 3, 4, 5];

// for (let el of array) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// }


// --- Урок 2


/*
  1. Приклади з областями видимості
*/

// -------------------------------//

// let a = 10;

// if (true) {
//   // const a = 5;
//   // console.log(a);
// }

// {
//   const a = 50;
// }

// console.log("in global", a);

// ------------------------------//
// const a = 10;

// if (true) {
//   let a = 5;
//   a = 15;
//   console.log("in local", a);
// }

// console.log("in global", a);

// ------------------------------//
// let a = 10;

// if (true) {
//   // let a = 100;
//   a = 1;
//   if (true) {
//     let a = 25;
//     a = 15;
//   }
// }

// console.log("global", a);

// const a = 5;

// {
//   // const a = 10;

//   {
//     // const a = 15;

//   }
// }

// console.log(a);

// ------------------------------//

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// let total = 0;

// for (const number of numbers) {
//   total += number;
//   console.log(total);
// }

// console.log(total);

// const array = ["1", "2"];

// {
//   const array = ["вфвфі", "віфвфі"];

//   // console.log(array);

//   array[2] = `dadas`;
//   console.log(array);
// }

/*
  2. Створення та види функцій
*/

// function declaretion

// getSum(50);

// function getSum(number1 = 0, number2 = 0, number3 = 0) {
//   // console.log(number1);
//   // console.log(number2);
//   // console.log(number3);
//   // console.log(`sum is: ${number1 + number2 + number3}`);

//   console.log(1);

//   return number1 + number2 + number3;

//   console.log(2);
// }

// getSum(60);

// const sum1 = getSum(10, 20, 30);

// console.log(sum1);

// getSum(2, 7);
// getSum(50, 7);
// getSum(10);

// function expression
// викликається тільки після оголошення

// const getSum = function (number1 = 0, number2 = 0, number3 = 0) {
//   return number1 + number2 + number3;
// };

// getSum();

/*
  3. Псевдомасив arguments
  Написати функцію getSum, яка повертає суму переданих у неї
  аргументів
  Використати цикл for для вирішення задачі
*/

// function getSum() {
//   let sum = 0;

//   for (let number of arguments) {
//     sum += number;
//   }

//   return sum;
// }

// console.log(getSum(10, 144, 300, 500, 600, 200));

// const sum = getSum(10, 144, 300, 500, 600, 200);

// console.log(sum);

/*
  4. Стек викликів
  Розібрати роботу стеку викликів на прикладі функцій:
*/

// function foo() {
//   console.log("start foo");
//   console.log("end foo");
// }

// function boo() {
//   console.log("start boo");
//   foo();
//   console.log("end boo");
// }

// boo();

/*
  5. Практичне завдання
  Напишіть функції для роботи з колекцією навчальних курсів courses:
  
  addCourse(name) - додає курс в кінець колекції, якщо раніше він не 
  був доданий
  removeCourse(name) - видаляє курс з колекції
  updateCourse(oldName, newName) - замінює назву курсу на нову
*/

// const courses = ["python", "fullstack developer", "frontend developer"];

// function addCourse(name) {
//   if (!courses.includes(name)) {
//     courses.push(name);
//   }
// }

// function removeCourse(name) {
//   const courseIdx = courses.indexOf(name);

//   if (courseIdx === -1) {
//     return;
//   }

//   courses.splice(courseIdx, 1);
// }

// function updateCourse(oldName, newName) {
//   const courseIdx = courses.indexOf(oldName);

//   if (courseIdx === -1) {
//     return;
//   }

//   courses.splice(courseIdx, 1, newName);
// }

// console.log(courses);

// addCourse(`java`);
// addCourse(`html`);

// console.log(courses);

// removeCourse("frontend developer");

// removeCourse("frontend developer");

// console.log(courses);

// updateCourse("python", "qa");

// console.log(courses);

// function getExtremeElements(array) {
//   const result = [];
//   result.push(array[0], array[array.length - 1]);
//   return result;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// function getExtremeElements(array) {
//   const result = [];
//   return result.push(array[0], array[array.length - 1]);
// }

// // console.log(getExtremeElements([1, 2, 3, 4, 5]));

// const array = [1, 2];

// const length = array.push(3, 4);

// console.log(length);

// const numbers = [1, 2, 3, 4, 5];

// for (let number of numbers) {
//   console.log(number);
// }

// function sayHi(name) {
//   return `Hi, ${name}!`;
// }

// console.log(sayHi);
// console.log(sayHi("Andrii"));

// console.log(console.log(Math.random() * (10 - 1) + 1));

// function findLongestWord(string) {
//   let word = "";

//   const arrayWords = string.split(" ");

//   for (let phrase of arrayWords) {
//     if (phrase.length > word.length) {
//       word = phrase;
//     }
//   }

//   return word;
// }

// const longestWord = findLongestWord("Welcome to the future");

// console.log(longestWord);