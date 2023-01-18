const btnAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value');
const outputEl = document.querySelector('.js-output span');

let total = 0;

// console.log(btnAdd);
// console.log(valueInput);

btnAdd.textContent = 'Кнопка прибавить'

btnAdd.addEventListener('click', function () {
    console.log('click me please again')

    const value = Number(valueInput.value);
    // console.log(value);
    total += value;
    outputEl.textContent = total;
    // console.log('total: ', total);
    valueInput.value = '';
});

resetBtn.addEventListener('click', function () {
    total = 0;
    outputEl.textContent = total;
});