// Генерация семантических тегов
const semanticTags = ['article', 'section', 'aside', 'nav', 'header', 'footer', 'main'];
const tagsDiv = document.getElementById('tags'); // Получаем контейнер для тегов

// Проходимся по массиву тегов и создаем их элементы на странице
semanticTags.forEach(tag => {
    const tagElement = document.createElement('div'); // Создаем новый div для тега
    tagElement.textContent = tag; // Устанавливаем текст в элементе
    tagElement.classList.add('tag'); // Добавляем класс для стилей
    // Добавляем обработчик события для двойного клика
    tagElement.ondblclick = () => {
        const input = document.createElement('input'); // Создаем input для ввода текста
        input.type = 'text'; // Устанавливаем тип input
        input.placeholder = `Введите текст для ${tag}`; // Подсказка в input
        // Обработчик события при потере фокуса на input
        input.onblur = () => {
            tagElement.textContent = input.value; // Обновляем текст тега
            tagElement.style.backgroundColor = ''; // Сбрасываем цвет
        };
        tagElement.innerHTML = ''; // Очищаем содержимое тега
        tagElement.appendChild(input); // Добавляем input в тег
        input.focus(); // Устанавливаем фокус на input
        tagElement.style.backgroundColor = 'lightblue'; // Меняем цвет тега
    };
    tagsDiv.appendChild(tagElement); // Добавляем тег в контейнер
});

// Регистрация пользователя
document.getElementById('save-button').onclick = () => {
    // Получаем значения из полей ввода
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;

    // Создаем карточку для отображения данных пользователя
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <p>Имя: ${name}</p>
        <p>Фамилия: ${surname}</p>
        <p>Телефон: ${phone}</p>
        <p>Почта: ${email}</p>
        <p>Город: ${city}</p>
        <button class="edit-button">Редактировать</button> <!-- Кнопка для редактирования данных -->
    `;
    
    document.getElementById('cards').appendChild(card); // Добавляем карточку в контейнер
    
    // Обработчик события для редактирования карточки
    card.querySelector('.edit-button').onclick = () => {
        // Заполняем поля ввода значениями из карточки
        document.getElementById('name').value = name;
        document.getElementById('surname').value = surname;
        document.getElementById('phone').value = phone;
        document.getElementById('email').value = email;
        document.getElementById('city').value = city;
        card.remove(); // Удаляем карточку
    };
};

// Создание 5 дивов с цветом
const colorDivsContainer = document.getElementById('color-divs'); // Получаем контейнер для цветных div
for (let i = 0; i < 5; i++) {
    const div = document.createElement('div'); // Создаем новый div
    div.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`; // Устанавливаем случайный цвет фона
    colorDivsContainer.appendChild(div); // Добавляем div в контейнер
}

// Генерация div из текстового поля
document.getElementById('generate-button').onclick = () => {
    const text = document.getElementById('text-input').value; // Получаем текст из поля
    if (text) {
        const newDiv = document.createElement('div'); // Создаем новый div
        newDiv.textContent = text; // Устанавливаем текст
        document.body.appendChild(newDiv); // Добавляем div в тело документа
        document.getElementById('text-input').value = ''; // Очищаем текстовое поле
    }
};

// Изменение картинки
const image = document.getElementById('image'); // Получаем элемент изображения
const imageUrls = [
    "https://itproger.com/img/courses/1476977240.jpg", // Первая картинка
    "https://itproger.com/img/courses/1476977488.jpg", // Вторая картинка
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" // Третья картинка
];
let imageIndex = 0; // Индекс текущей картинки

// Обработчик события для замены картинки
document.getElementById('change-image-button').onclick = () => {
    imageIndex = (imageIndex + 1) % imageUrls.length; // Увеличиваем индекс и сбрасываем при превышении
    image.src = imageUrls[imageIndex]; // Меняем источник изображения
};

// Создание 10 параграфов
const paragraphsDiv = document.getElementById('paragraphs'); // Получаем контейнер для параграфов
for (let i = 0; i < 10; i++) {
    const p = document.createElement('p'); // Создаем новый параграф
    p.textContent = `Параграф ${i + 1}`; // Устанавливаем текст параграфа
    p.onclick = () => {
        p.remove(); // Удаляем параграф при нажатии
    };
    paragraphsDiv.appendChild(p); // Добавляем параграф в контейнер
}

