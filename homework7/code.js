function createNewUser() {
    // Спрашиваем имя и фамилию
    const firstName = prompt("Введите ваше имя:");
    const lastName = prompt("Введите вашу фамилию:");
    const birthdayInput = prompt("Введите вашу дату рождения (дд.мм.гггг):");

    // Создаем объект newUser
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthdayInput,
        // Метод для получения логина
        getLogin: function() {
            return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        },
        // Метод для получения возраста
        getAge: function() {
            const today = new Date();
            const birthDate = new Date(this.birthday.split('.').reverse().join('-')); // Преобразуем формат
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },
        // Метод для получения пароля
        getPassword: function() {
            return this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + this.birthday.split('.')[2]; // Год рождения
        }
    };

    return newUser;
}

// Создаем пользователя
const user = createNewUser();

// Выводим результаты
console.log("Логин:", user.getLogin());
console.log("Возраст:", user.getAge(), "лет");
console.log("Пароль:", user.getPassword());
