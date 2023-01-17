const btnAdd = document.querySelector('button[data-add]');
const valueInput = document.querySelector('input[data-value');

let total = 0;

// console.log(btnAdd);
// console.log(valueInput);

btnAdd.textContent = 'Кнопка'

btnAdd.addEventListener('click', function () {
    console.log('click me please again')

    const value = Number(valueInput.value);
    console.log(value);

    total += value;

    console.log('total: ', total);

    valueInput.value = '';
})