// --- Онлайн лекция 1

const value = 27.5;

const ceil = Math.ceil(value);
const floor = Math.floor(value);
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

// --- Онлайн лекция 2

// --- Задача

// Використовуючи конструкцію if...else та prompt, напиши код,
// який запитуватиме: 'Який стандарт мови JavaScript?'.
// Якщо користувач вводить ECMAScript, то показуй alert з рядком "Вірно!',
// інакше - 'Не знаєте? ECMAScript!'

const message = prompt("Який стандарт мови JavaScript?");
if (message === "ECMAScript") {
  alert("Вірно!");
} else {
  alert("Не знаєте? ECMAScript!");
}

// --- Задача

// Напиши скрипт, який приводить у консоль рядок "Це додатнє число", якщо
// в prompt користувач ввів число більше за нуль. Якщо було введено нуль,
// виводь у консоль рядок "Це нуль'. Якщо передали відʼємне число, у консолі
// має бути рядок "Це від'ємне число".

const number = Number(prompt(`Write your number`));
if (number > 0) {
  console.log("Це додатнє число");
} else if (number === 0) {
  console.log("Це нуль");
} else {
  console.log("Це відʼємне число");
}

// --- Приклад

// if (!link.endsWidth("/")) {
//     link += '/';
// }

// --- Задача

// Напиши скрипт для відображення дедлайну - часу здачі проєкту.
// Використовуй конструкцію switch...case
// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Можна відпочити :)"

const deadline = Number(prompt("Write eadline"));

switch (deadline) {
  case 0: {
        console.log(`Сьогодні`);
        break;
  }
  case 1: {
        console.log(`Завтра`);
        break;
  }
  case 2: {
        console.log(`Післязавтра`);
        break;
  }
  default: {
        console.log(`Можна відпочити :)`);
        break;
  }
}


// --- Задача

// Напиши скрипт котрий порахує суму чисел від 1 до 10 та виведе у консоль результат. 

let sum = 0;

for (let num = 1; num <= 10; num += 1) {
    console.log(num);
    sum += num;
}

console.log(sum);


// --- Задача

// Напиши цикл ог який виводить у консоль браузера числа зростанням
// від min до max, але якщо число кратне 5. 

const min = 20;

const max = 100;

for (let iteration = min; iteration <= max; iteration += 1) {
    if (iteration % 5 === 0) {
        console.log(iteration);
    }
}


// --- Задача

// Напишіть скрипт який порахує скільки на проміжку від from до to було чисел,
// які є кратними 7.

const from = 1;

const to = 20;

let count = 0;

for (let i = from; i <= to; i += 1) {
    if (i % 7 === 0) {
        console.log(i);
        count += 1;
    }
}

console.log(count);


// --- Задача

// Напишіть скрипт для світлофора, де користувач може ввести назву кольору
// у prompt і в залежності від того який був введений колір відображатимуться
// різні повідомлення через alert. Використовуй конструкцію switch case.

// red - 'STOP!!!!'
// green - 'GO!'
// yellow - 'Wait a little!'

const color = prompt("Write your color").toLowerCase();
switch (color) {
  case "red":
    alert("STOP!!!!");
    break;

  case "green":
    alert("GO!");
    break;

  case "yellow":
    alert("Wait a little!");
    break;

  default:
    break;
}


// --- Задача

// Напиши скрипт який буде просити нас ввести число більше за
// 100, доки ми таке не введемо. Скористайся циклом while.

let numbers = Number(prompt('Write your number bigger then 100'));

while (numbers < 100) {
    numbers = Number(prompt('Write your number bigger then 100'));
}


// --- Приклад

// function checkForSpam(message) {
//   const result =
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale")
//       ? true
//       : false;
//   return result;
// }

// АБО

// function checkForSpam(message) {
//   if (
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale")
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }


// --- Приклад

// const result = 9 > 7 ? "Більше" : "Менше" ;

// console.log(result);



// --- Онлайн лекция 2

