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

