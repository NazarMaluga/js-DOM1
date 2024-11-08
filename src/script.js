function add() {
    calculate((a, b) => a + b);
}

function subtract() {
    calculate((a, b) => a - b);
}

function multiply() {
    calculate((a, b) => a * b);
}

function divide() {
    calculate((a, b) => b !== 0 ? (a / b).toFixed(2) : "Ділення на нуль неможливе");
}

function calculate(operation) {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = "Будь ласка, введіть коректні числа";
    } else {
        resultElement.textContent = "Результат: " + operation(number1, number2);
    }
}
