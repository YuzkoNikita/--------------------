//Код по памяти
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const submitBtn = document.getElementById('submit');
const resultElement = document.getElementById('result');

let action;

plusBtn.onclick = function() {
    action = '+';
};
minusBtn.onclick = function() {
    action = '-';
};
divideBtn.onclick = function() {
    action = '/';
};
multiplyBtn.onclick = function() {
    action = '*';
};

function calculate(input1, input2, action) {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);

    switch(action) {
        case '+':
            return num1 + num2;

        case '-':
            return num1 - num2;

        case '*':
            return num1 * num2;

        case '/':
            if (num2 == 0) {
                return 'Lol its zero!';
            } else {
                return num1 / num2;
            };
    };
};

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'green';
    };

    resultElement.textContent = result;
};

submitBtn.onclick = function() {
    const result = calculate(input1, input2, action);

    printResult(result);
};