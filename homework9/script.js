// JavaScript для секундомера
let timer;
let [hours, minutes, seconds] = [0, 0, 0];
const timeDisplay = document.getElementById('time-display');

// Функция обновления отображаемого времени
const updateDisplay = () => {
    const formattedTime = `
        ${hours.toString().padStart(2, '0')}:
        ${minutes.toString().padStart(2, '0')}:
        ${seconds.toString().padStart(2, '0')}
    `;
    timeDisplay.textContent = formattedTime.trim();
};

// Функция запуска таймера
const startTimer = () => {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        updateDisplay();
    }, 1000);
};

// Функция остановки таймера
const stopTimer = () => {
    clearInterval(timer);
};

// Функция сброса таймера
const resetTimer = () => {
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
};

// Обработчики событий для кнопок
document.getElementById('start').addEventListener('click', () => {
    document.querySelector('.stopwatch').style.backgroundColor = 'green';
    startTimer();
});

document.getElementById('stop').addEventListener('click', () => {
    document.querySelector('.stopwatch').style.backgroundColor = 'red';
    stopTimer();
});

document.getElementById('reset').addEventListener('click', () => {
    document.querySelector('.stopwatch').style.backgroundColor = 'gray';
    resetTimer();
});

// Проверка телефона
document.getElementById('save-phone').addEventListener('click', () => {
    const phoneInput = document.getElementById('phone-input').value;
    const phoneError = document.getElementById('phone-error');
    const phonePattern = /^\d{3}-\d{3}-\d{2}-\d{2}$/;

    if (phonePattern.test(phoneInput)) {
        document.getElementById('phone-input').style.backgroundColor = 'green';
        document.location.href = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
    } else {
        phoneError.textContent = 'Неверный формат номера. Правильный формат: 000-000-00-00';
        document.getElementById('phone-input').style.backgroundColor = 'red';
    }
});

// JavaScript для слайдера
const images = [
    'https://new-science.ru/wp-content/uploads/2020/03/4848-4.jpg',
    'https://universetoday.ru/wp-content/uploads/2018/10/Mercury.jpg',
    'https://naukatv.ru/upload/files/shutterstock_418733752.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
    'https://nnst1.gismeteo.ru/images/2020/07/shutterstock_1450308851-640x360.jpg'
];

let currentIndex = 0;
const sliderImg = document.getElementById('sliderImg');

// Функция смены изображения
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImg.src = images[currentIndex];
}

// Меняем изображение каждые 3 секунды
setInterval(changeImage, 3000);



