// Перебор (итерация) массива
// for - если нужен индекс или нужно изменить элемент массива
// for...of - если индекс не нужен и в массиве ничего менять не нужно

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//     console.log(friends[i]);
//     // friends[i] += `-${i}`;
// }

// for (const friend of friends) {
//     console.log(friend);
// }


// --- Задача

// Посчитать общую сумму покупок в корзине:

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);

//     total += cart[i];
// }

// Другой вариант решения:

// for (const value of cart) {
// total += value;
// }

// console.log('Total: ', total);


// --- Задача

// Напиши скрипт который подсчитывает сумму всех четных чисел в массиве:


// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11, 28];
// let total = 0;

// // Перебрать массив 

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);

// // На каждой итерации проверить элемент на чётность
    
//   if (numbers[i] % 2 === 0) {
//       console.log("Четное!!!!");
      
// // Если чётный плюсуем к тотал 

//       total += numbers[i];
//   }
// }

// console.log('Total: ', total);


// Другой вариант решения:

// for (const number of numbers) {
//   console.log(number);
//   if (number % 2 === 0) {
//     console.log("Четное!!!!");

//     total += number;
//   }
// }

// console.log("Total: ", total);


// --- Задача

// Напиши скрипт поиска логина
// - Если логина нет, вывести сообщение "Пользователь [логин] не найден"
// - Если нашли логин, вывести сообщение "Пользователь [логин] найден"
// Сначала через for
// Потом через for...of
// Логика break
// Метод includes( ) с тернарным оператором

const logins = ["m4ngoDoge", "kiwidab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "poly1scute";
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }
//   console.log(message);


// Другой вариант решения:

// for (const login of logins) {
//   console.log("Login: ", login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log("Ура, равны!!!");
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }
// console.log(message);


// Другой вариант решения:

const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;

console.log(message);


// --- Задача

// Напиши скрипт поиска самого маленького числа в массиве 
// при условии что числа уникальные(не повторяются).

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// let smallestNumber = numbers[0];

// for (const number of numbers) {

//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber: ', smallestNumber);


// --- Задача

// Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
// Элементов может быть произвольное кол-во.
// Пусть элементы массива в строке будут разделены запятой.
// - Сначала через for
// - Потом через join()

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//     string += friend + ',';
// }

// string = string.slice(0, string.length - 1);

// Другой вариант решения:

// const string = friends.join(', ');
// console.log(string);


// --- Задача

// Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
// Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
    console.log(letter);

    // if (letter === letter.toLowerCase()) {
    //     console.log('Эта буква в нижнем регистре!!! - ', letter);

    //     invertedString += letter.toUpperCase();

    // } else {
    //     console.log('Эта буква в верхнет регистре!!! - ', letter);
    //     invertedString += letter.toLowerCase();
    // }

// Другой вариант решения:

    invertedString +=
      letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
}

console.log('invertedString: ', invertedString);


// --- Задача

// Делаем slug в URL из названия статьи (например на dev.to)
// Заголовок статьи состоит только из букв и пробелов.
// - Нормализируем строку;
// - Разбиваем по словам;
// - Сшиваем в строку с разделителями.

// Должно получиться top-10-benefits-of-react-framework

const title = 'Top 10 benefits of React framework';

const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

const words = normalizedTitle.split(' ');
// console.log(words);

const slug = words.join('-');
// console.log(slug);

const slug1 = title.toLowerCase().split(' ').join('-');

console.log(slug1);


// --- Задача

// Напиши скрипт который считает сумму элементов двух массивов.

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

let total = 0;

const numbers = array1.concat(array2);

for (const number of numbers) {
    total += number;
}

console.log(total);



// --- Работем с коллекцией карточек в trello

// - Метод splice()
// - Удалить
// - Добавить
// - Обновить

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
]

console.table(cards);

// Удаление (по индексу), метод index0f()

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 2);

// console.table(cards);

// Добавление (по индексу)

// const cardToInsert = 'Карточка-6';

// const index = 3;

// cards.splice(index, 0, cardToInsert);

// console.table(cards);

// Обновление (по индексу)

const cardToUpdate = 'Карточка-4';

const index = cards.indexOf(cardToUpdate);

console.log(index);

cards.splice(index, 1, "Обновленная карточка-4");

console.table(cards);
