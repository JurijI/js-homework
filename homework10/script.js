// Функциональность калькулятора
const calculator = {
    displayValue: '0',   // Значение на дисплее
    firstOperand: null,  // Первый операнд
    waitingForSecondOperand: false,  // Флаг ожидания второго операнда
    operator: null,      // Оператор
    memory: 0,           // Значение в памяти
    memoryActive: false  // Флаг, отображающий, что в памяти есть число
};

// Обновление экрана калькулятора
function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.memoryActive ? `m ${calculator.displayValue}` : calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    const { value } = target;

    if (!target.matches('button')) {
        return;
    }

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
            handleOperator(value);
            break;
        case '=':
            handleEqual();
            break;
        case 'C':
            resetCalculator();
            break;
        case 'm+':
            addToMemory();
            break;
        case 'm-':
            subtractFromMemory();
            break;
        case 'mrc':
            recallMemory();
            break;
        default:
            handleNumber(value);
    }

    updateDisplay();
});

// Функция обработки чисел
function handleNumber(number) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = number;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? number : displayValue + number;
    }
}

// Функция обработки операторов
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }

    if (firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation[operator](firstOperand, inputValue);
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

// Функция выполнения расчетов
const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
};

// Обработка кнопки "="
function handleEqual() {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (operator && firstOperand != null && !calculator.waitingForSecondOperand) {
        const result = performCalculation[operator](firstOperand, inputValue);
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
        calculator.operator = null;
        calculator.waitingForSecondOperand = false;
    }
}

// Сброс калькулятора
function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    calculator.memory = 0;
    calculator.memoryActive = false;
}

// Добавление значения в память
function addToMemory() {
    calculator.memory += parseFloat(calculator.displayValue);
    calculator.memoryActive = true;
}

// Вычитание значения из памяти
function subtractFromMemory() {
    calculator.memory -= parseFloat(calculator.displayValue);
    calculator.memoryActive = true;
}

// Вызов значения из памяти
function recallMemory() {
    calculator.displayValue = calculator.memory.toString();
}

// Функциональность ротации баннеров
const banners = [
    'img/1.jpg', 
    'img/2.jpg',
    'img/3.JPG',
    'img/4.png'
];
let currentBannerIndex = 0;
let bannerInterval = setInterval(changeBanner, 10000); // Меняем баннер каждые 10 секунд

// Функция смены баннера
function changeBanner() {
    const banner = document.getElementById('banner');
    banner.style.backgroundImage = `url(${banners[currentBannerIndex]})`;
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
}

// Остановка ротации баннеров
document.getElementById('stopButton').addEventListener('click', () => {
    clearInterval(bannerInterval);
});

// Возобновление ротации баннеров
document.getElementById('resumeButton').addEventListener('click', () => {
    bannerInterval = setInterval(changeBanner, 10000);
});

// Инициализация первого баннера
changeBanner();
