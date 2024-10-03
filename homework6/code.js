// Функція-конструктор для страви
function Dish(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}

// Метод для отримання деталей страви
Dish.prototype.getDetails = function() {
    return `Назва: ${this.name}, Ціна: $${this.price.toFixed(2)}, Категорія: ${this.category}`;
};

// Функція-конструктор для меню
function Menu() {
    this.dishes = [];
}

// Метод для додавання страви
Menu.prototype.addDish = function(dish) {
    if (dish.name && dish.price > 0 && dish.category) {
        this.dishes.push(dish);
        console.log(`Страву "${dish.name}" було додано до меню.`);
    } else {
        console.error('Всі поля повинні бути заповнені правильно.');
    }
};

// Метод для видалення страви за назвою
Menu.prototype.removeDish = function(name) {
    const initialLength = this.dishes.length;
    this.dishes = this.dishes.filter(dish => dish.name !== name);
    
    if (this.dishes.length < initialLength) {
        console.log(`Страву "${name}" було видалено з меню.`);
    } else {
        console.error(`Страву "${name}" не знайдено в меню.`);
    }
};

// Метод для виведення списку страв
Menu.prototype.listDishes = function() {
    console.log("Меню:");
    this.dishes.forEach(dish => {
        console.log(dish.getDetails());
    });
};

// Метод для пошуку страви за назвою
Menu.prototype.findDish = function(name) {
    const foundDish = this.dishes.find(dish => dish.name === name);
    if (foundDish) {
        console.log(`Знайдено: ${foundDish.getDetails()}`);
    } else {
        console.error(`Страву "${name}" не знайдено.`);
    }
};

// Метод для редагування інформації про страву
Menu.prototype.editDish = function(name, newDetails) {
    const dish = this.dishes.find(dish => dish.name === name);
    if (dish) {
        if (newDetails.name) dish.name = newDetails.name;
        if (newDetails.price) dish.price = newDetails.price;
        if (newDetails.category) dish.category = newDetails.category;
        console.log(`Оновлено: ${dish.getDetails()}`);
    } else {
        console.error(`Страву "${name}" не знайдено.`);
    }
};

// Функція-конструктор для замовлення
function Order(tableNumber, dishes) {
    this.tableNumber = tableNumber;
    this.dishes = dishes;
}

// Метод для отримання деталей замовлення
Order.prototype.getOrderDetails = function() {
    const dishNames = this.dishes.map(dish => dish.name).join(', ');
    return `Номер столика: ${this.tableNumber}, Страви: ${dishNames}`;
};

// Метод для отримання загальної суми замовлення
Order.prototype.getTotalPrice = function() {
    return this.dishes.reduce((total, dish) => total + dish.price, 0);
};

// Функція-конструктор для ресторану
function Restaurant() {
    this.orders = [];
}

// Метод для додавання замовлення
Restaurant.prototype.addOrder = function(order) {
    this.orders.push(order);
    console.log(`Замовлення для столика ${order.tableNumber} було додано.`);
};

// Метод для виведення списку замовлень
Restaurant.prototype.listOrders = function() {
    console.log("Замовлення:");
    this.orders.forEach(order => {
        console.log(order.getOrderDetails());
    });
};

// Метод для видалення замовлення за номером столика
Restaurant.prototype.removeOrder = function(tableNumber) {
    const initialLength = this.orders.length;
    this.orders = this.orders.filter(order => order.tableNumber !== tableNumber);
    
    if (this.orders.length < initialLength) {
        console.log(`Замовлення для столика ${tableNumber} було видалено.`);
    } else {
        console.error(`Замовлення для столика ${tableNumber} не знайдено.`);
    }
};

// Приклад використання
const menu = new Menu();
const dish1 = new Dish('Паста', 12.99, 'Головна страва');
const dish2 = new Dish('Салат', 7.99, 'Закуска');
const dish3 = new Dish('Суп', 5.99, 'Закуска');

menu.addDish(dish1);
menu.addDish(dish2);
menu.addDish(dish3);
menu.listDishes();

const order1 = new Order(1, [dish1, dish2]);
const order2 = new Order(2, [dish2, dish3]);
const restaurant = new Restaurant();

restaurant.addOrder(order1);
restaurant.addOrder(order2);
restaurant.listOrders();

console.log(`Загальна сума для замовлення 1: $${order1.getTotalPrice().toFixed(2)}`);
console.log(`Загальна сума для замовлення 2: $${order2.getTotalPrice().toFixed(2)}`);

// Додаткові операції
menu.findDish('Паста');
menu.editDish('Паста', { price: 14.99 });
menu.removeDish('Салат');
menu.listDishes();

restaurant.removeOrder(1);
restaurant.listOrders();
